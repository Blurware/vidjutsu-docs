// Builds the public VidJutsu Cloud API spec (docs/openapi/spec.json) from the
// engine's OpenAPI spec (openapi/engine.json, copied from
// tfcbot/vidjutsu-core docs/openapi.json) plus the account, sign-in and
// billing routes the cloud adds in front of it.
//
//   node scripts/build-spec.mjs          # write docs/openapi/spec.json
//   node scripts/build-spec.mjs --check  # fail if the committed file is stale
//
// The engine routes keep their request and response schemas. What changes for
// the cloud: one base URL, bearer auth, the cloud's error body, no `repo`
// fields (your account picks your storage), the public operation names that
// the MCP tools also use, and descriptions written for customers.

import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const DOCS = "https://docs.vidjutsu.ai";

// The API is versioned by date, like Stripe: paths carry no version, and
// every request names one in this header. Keep in step with the gateway.
export const API_VERSION = "2026-11-03";
export const VERSION_HEADER = "VidJutsu-Version";

// Engine routes served by the cloud, with their public names (also the MCP
// tool names) and customer-facing text.
const ENGINE_ROUTES = [
  ["post", "/v3/media", "ingest", "Add media", "Media",
    "Add a file to your library from an https link (`{url, name}`), or send up to 4 MB of raw bytes as `application/octet-stream` with `?name=`. Larger files go through [direct uploads](" + DOCS + "/guides/uploads). A video with sound also returns its sound as audio media."],
  ["get", "/v3/media/{hash}", "media_info", "Get a media item", "Media",
    "The stored size of one media item."],
  ["get", "/v3/media/{hash}/url", "media_url", "Get a download link", "Media",
    "A time-limited download link for a media item or a finished render. `ttl` is in seconds, from 60 to 604800 (default 86400)."],
  ["post", "/v3/uploads", "create_upload", "Start an upload", "Uploads",
    "Start a direct upload of a large file. Returns one presigned PUT link per part: PUT exactly `part_size` bytes to each (the last part may be shorter), keep each response's `ETag`, then complete the upload. If `already_stored` is true, complete it right away with `{}`."],
  ["post", "/v3/uploads/{upload_id}/complete", "complete_upload", "Complete an upload", "Uploads",
    "Finish a direct upload with every part's number and ETag. The stored bytes are checked against the SHA-256 you sent, then the file is added to your library. Completing again returns the same answer."],
  ["delete", "/v3/uploads/{upload_id}", "abort_upload", "Abort an upload", "Uploads",
    "Abandon a direct upload and the parts sent so far."],
  ["post", "/v3/projects", "init", "Create a project", "Projects",
    "Create a project: an edit timeline with history. Without a manifest it starts empty, with one video track (`v1`) and one audio track (`a1`)."],
  ["get", "/v3/projects/{project}", "show", "Get a project", "Projects",
    "A project's timeline at a branch head (default `main`) or at a given revision, with its manifest and length."],
  ["post", "/v3/projects/{project}/edits", "edit", "Edit a timeline", "Projects",
    "Apply edit operations as one atomic commit. Any failing operation rejects the whole edit and leaves the timeline unchanged. Send `expected_head` (the revision you edited) so a retry can't apply twice. See [Editing](" + DOCS + "/guides/editing)."],
  ["post", "/v3/projects/{project}/level", "level", "Level audio", "Audio",
    "Measure what each clip on the named audio tracks plays (EBU R128) and set gains so each plays at `target` LUFS, as one edit. `dry_run` measures without editing."],
  ["post", "/v3/audio/clean", "clean_audio", "Clean up audio", "Audio",
    "Studio sound: clean one or more speech tracks, optionally mixed over a music bed, and add the result to your library as audio media."],
  ["post", "/v3/projects/{project}/renders", "render", "Start a render", "Renders",
    "Render a project's timeline (the branch head, or a pinned revision) on parallel cloud machines. Answers 202 with a job right away; poll it until it ends. Send an `Idempotency-Key` header so a retry returns the same job. Ranges that didn't change since a previous render are reused."],
  ["get", "/v3/jobs/{job_id}", "render_status", "Get a render job", "Renders",
    "A render job's state and progress. Once it has succeeded, `output.url` is a fresh 7-day download link on every read."],
  ["post", "/v3/jobs/{job_id}/cancel", "cancel_render", "Cancel a render", "Renders",
    "Stop a render job and its machines. You pay only for the output already rendered."],
];

// Schema text that names engine internals is rewritten for customers.
const SCHEMA_TEXT = {
  CleanAudio: "Speech tracks (one per speaker) and an optional music bed, as stored media hashes. The cleaned, mixed result is added to your library as audio media.",
  CompleteUpload: "Every part you sent, by number and ETag.",
  EditProject: "Edit operations applied to a branch head as one atomic commit. The body is a list of operations, or an object with `operations` and optionally `branch` and, for safe retries, `expected_head` and `idempotency_key`. Times are seconds (`12`, `\"12.5\"`) or fractions (`\"1001/30000\"`).",
  IngestUrl: "An https link to add to your library.",
  InitProject: "A project name and, optionally, a full manifest. Without one, the project starts empty with tracks `v1` (video) and `a1` (audio).",
  LevelAudio: "Audio tracks to level, and the loudness to level them to.",
  RenderProject: "What to render and how. Every field is optional.",
  StartUpload: "The file's name, exact length and SHA-256.",
  "EditProject.operations": "Edit operations, each named by `op`: `add_media`, `add_track`, `insert_clip`, `delete_clip`, `move_clip`, `trim_clip`, `swap_media`, `set_gain`, `set_fade`, `cut_pauses`, `set_layout`. Each operation sees the result of the ones before it. See " + DOCS + "/guides/editing.",
  "InitProject.manifest": "A full project manifest. Absent: an empty project with tracks `v1` (video) and `a1` (audio).",
  "Project.manifest": "The project manifest: media, tracks and clips.",
  "Ingested.conform_at_render": "Whether the parts of this video a render uses are converted at render time (it is stored as uploaded).",
  "Ingested.converted": "Whether the file was converted before storing (a still image becomes PNG).",
  "Job.report": "Render timings, or null.",
  "Job.usage.box_seconds": "Machine time, from creation to stop.",
  "Job.usage.boxes": "Machines used.",
  "Job.usage.final": "The job has finished: these numbers will not change.",
  "RenderProject.boxes": "Cap on machines for this render (default: chosen for you).",
  "RenderProject.hedge": "Run slow ranges again on idle machines (default true).",
  "RenderProject.height": "1080 (1920x1080) or 2160 (3840x2160, 4K), 30 fps. Default 1080.",
  "RenderProject.split": "`cuts` (default): ranges follow clip boundaries, so later edits reuse untouched ranges; `grid`: fixed ranges from frame 0.",
  "RenderProject.range_seconds": "Length of each render range, in seconds (default 15).",
  "RenderProject.force": "Render even if this exact output already exists.",
};

// Engine-only fields the cloud doesn't take.
const DROPPED_FIELDS = { RenderProject: ["ffmpeg"] };
const ENGINE_ONLY_SCHEMAS = ["Health", "JsonRpc", "Purged", "Storage"];

const ERROR_CODES = [
  "unauthenticated", "forbidden", "no_account", "payment_required", "plan_limit", "rate_limited",
  "not_found", "invalid_request", "conflict", "payload_too_large", "upstream_error", "service_unavailable",
];

const ERROR_SCHEMA = {
  type: "object",
  description: "Every error has a stable `code` and a `message`. Billing and limit errors add the fields that tell you how to fix them. See " + DOCS + "/errors.",
  required: ["code", "message", "request_id"],
  properties: {
    code: { type: "string", enum: ERROR_CODES, description: "Stable error code." },
    message: { type: "string", description: "What went wrong, in plain words." },
    reason: { type: "string", description: "Finer cause, for example `no_plan`, `payment_failed`, `spend_limit`, `stale_head`." },
    checkout_url: { type: "string", description: "402 with no plan: a Stripe Checkout link that starts Pro." },
    portal_url: { type: "string", description: "402 after a failed payment: a Stripe billing portal link to update your card." },
    media_deletes_at: { type: "string", format: "date-time", description: "After a failed payment: when your stored media will be deleted if the payment isn't made." },
    contact_url: { type: "string", description: "403 plan_limit: where to ask about Enterprise." },
    retry_after_seconds: { type: "integer", description: "429: when to try again (also sent as a Retry-After header)." },
    latest_version: { type: "string", description: "400 unknown_version: the newest API version." },
    request_id: { type: "string", description: "Your Idempotency-Key, or a generated id. Quote it when you contact support." },
  },
};

const errorResponse = (description) => ({
  description,
  content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
});

const AUTH_ERRORS = {
  "401": errorResponse("No API key or token, or it isn't valid."),
};
const ENGINE_ERRORS = {
  ...AUTH_ERRORS,
  "402": errorResponse("No active plan (`checkout_url`), or the last payment failed (`portal_url`)."),
  "403": errorResponse("A plan limit was reached (`plan_limit`, with `reason` and `contact_url`)."),
  "429": errorResponse("Too many renders at once, or too many requests. Retry after `retry_after_seconds`."),
  default: errorResponse("Any other error: 400 invalid_request, 404 not_found, 409 conflict, 413 payload_too_large, 502 upstream_error, 503 service_unavailable."),
};

const IDEMPOTENCY_HEADER = {
  name: "Idempotency-Key",
  in: "header",
  required: false,
  description: "Makes a write safe to retry: the same key returns the first result instead of doing the work twice. Up to 128 printable characters.",
  schema: { type: "string", maxLength: 128 },
};

const VERSION_PARAMETER = {
  name: VERSION_HEADER,
  in: "header",
  required: false,
  description: `The API version you wrote your integration against, a date. Without it you get the latest version. The current version is \`${API_VERSION}\`. See ${DOCS}/api-reference/introduction#versioning.`,
  schema: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$", example: API_VERSION },
};

const json = (schema, description) => ({ description, content: { "application/json": { schema } } });
const ref = (name) => ({ $ref: `#/components/schemas/${name}` });

const CLOUD_SCHEMAS = {
  Error: ERROR_SCHEMA,
  Health: {
    type: "object",
    required: ["ok", "service", "version", "api_version"],
    properties: {
      ok: { type: "boolean" },
      service: { type: "string" },
      version: { type: "string", description: "The service build." },
      api_version: { type: "string", description: "The API version this request was served with." },
    },
  },
  SignInStart: {
    type: "object",
    required: ["email"],
    properties: { email: { type: "string", format: "email", description: "Where to send the sign-in code." } },
  },
  SignInStarted: {
    type: "object",
    required: ["attempt", "expires_at"],
    properties: {
      attempt: { type: "string", description: "Send it back with the code to POST /auth/verify." },
      expires_at: { type: "string", format: "date-time" },
      next: { type: "string" },
    },
  },
  SignInVerify: {
    type: "object",
    required: ["attempt", "code"],
    properties: {
      attempt: { type: "string", description: "From POST /auth/email." },
      code: { type: "string", description: "The code from the email." },
      name: { type: "string", maxLength: 64, description: "A name for the API key this creates." },
    },
  },
  SignedIn: {
    type: "object",
    required: ["api_key", "key_id", "account_id", "status"],
    properties: {
      api_key: { type: "string", description: "`vj_live_...`. Shown once: keep it. Send it as `Authorization: Bearer <api_key>`." },
      key_id: { type: "string" },
      account_id: { type: "string" },
      status: ref("AccountStatus"),
      checkout_url: { type: "string", description: "When `status` is `no_plan`: a Stripe Checkout link that starts Pro." },
      note: { type: "string" },
    },
  },
  AccountStatus: {
    type: "string",
    enum: ["no_plan", "active", "payment_failed"],
    description: "`no_plan`: subscribe to start work. `active`: everything works. `payment_failed`: reads work, new work is paused until you update your card.",
  },
  Account: {
    type: "object",
    required: ["account_id", "status"],
    properties: {
      account_id: { type: "string" },
      status: ref("AccountStatus"),
      plan_version: { type: ["object", "null"], description: "The plan you're on, or null before you subscribe.", additionalProperties: true },
      media_deletes_at: { type: ["string", "null"], format: "date-time", description: "After a failed payment: when stored media will be deleted if the payment isn't made." },
    },
  },
  Usage: {
    type: "object",
    additionalProperties: true,
    description: "This billing period's usage of each meter (render minutes up to 1080p, render minutes above 1080p, storage), what's left of your included allowance, and the spend so far. `{\"state\": \"unavailable\"}` when it can't be read right now.",
  },
  Entitlements: {
    type: "object",
    additionalProperties: true,
    description: "`{\"state\": \"available\", \"entitlements\": {...}, \"spend_limit_micros\": ...}`: your plan's limits and features. Money is in micro-dollars.",
  },
  CreateKey: {
    type: "object",
    required: ["name"],
    properties: { name: { type: "string", description: "A label to recognize the key by." } },
  },
  ApiKey: {
    type: "object",
    required: ["key_id", "name", "prefix", "created_at"],
    properties: {
      key_id: { type: "string" },
      name: { type: "string" },
      prefix: { type: "string", description: "The key's first characters, to recognize it." },
      created_at: { type: "number", description: "Unix milliseconds." },
      revoked_at: { type: ["number", "null"] },
    },
  },
  CreatedKey: {
    allOf: [ref("ApiKey"), {
      type: "object",
      required: ["secret"],
      properties: { secret: { type: "string", description: "`vj_live_...`. Shown only once." } },
    }],
  },
  KeyList: {
    type: "object",
    required: ["keys"],
    properties: { keys: { type: "array", items: ref("ApiKey") } },
  },
  RevokedKey: {
    type: "object",
    required: ["key_id", "revoked"],
    properties: { key_id: { type: "string" }, revoked: { type: "boolean" } },
  },
  CheckoutRequest: {
    type: "object",
    properties: {
      success_url: { type: "string", format: "uri", description: "https URL to return to after paying." },
      cancel_url: { type: "string", format: "uri", description: "https URL to return to if you cancel." },
    },
  },
  PortalRequest: {
    type: "object",
    properties: { return_url: { type: "string", format: "uri", description: "https URL to return to." } },
  },
  BillingLink: {
    type: "object",
    required: ["url"],
    properties: {
      url: { type: "string", description: "A Stripe-hosted page. Open it in a browser." },
      reused: { type: "boolean", description: "Checkout only: an open checkout session was reused." },
    },
  },
};

const CLOUD_PATHS = {
  "/health": {
    get: {
      operationId: "health", tags: ["Status"], summary: "Health", security: [],
      description: "Whether the API is up. No key needed.",
      responses: { "200": json(ref("Health"), "Up") },
    },
  },
  "/auth/email": {
    post: {
      operationId: "sign_in_email", tags: ["Sign-up and sign-in"], summary: "Email a sign-in code", security: [],
      description: "Sign up or sign in: emails a one-time code to the address. Works the same for new and existing users. No key needed.",
      requestBody: { required: true, content: { "application/json": { schema: ref("SignInStart") } } },
      responses: { "200": json(ref("SignInStarted"), "Code sent"), default: errorResponse("400 invalid_request, 429 rate_limited") },
    },
  },
  "/auth/verify": {
    post: {
      operationId: "sign_in_verify", tags: ["Sign-up and sign-in"], summary: "Verify the code", security: [],
      description: "Check the emailed code. Creates your account on first sign-in and returns a new API key. A new account has no plan yet: open `checkout_url` to start Pro.",
      requestBody: { required: true, content: { "application/json": { schema: ref("SignInVerify") } } },
      responses: { "201": json(ref("SignedIn"), "Signed in, with a new API key"), default: errorResponse("400 invalid_request (wrong or expired code), 429 rate_limited") },
    },
  },
  "/account": {
    get: {
      operationId: "account", tags: ["Account"], summary: "Get your account",
      description: "Your account id, status and plan.",
      responses: { "200": json(ref("Account"), "Your account"), ...AUTH_ERRORS },
    },
    post: {
      operationId: "create_account", tags: ["Account"], summary: "Create your account",
      description: "Create your account after signing in with OAuth. Safe to call again. Not needed after POST /auth/verify, and API keys can't call it.",
      responses: { "200": json(ref("Account"), "Your account"), ...AUTH_ERRORS, "403": errorResponse("Called with an API key.") },
    },
  },
  "/usage": {
    get: {
      operationId: "usage", tags: ["Account"], summary: "Get usage",
      description: "This billing period's usage and what's left of your included allowance.",
      responses: { "200": json(ref("Usage"), "Usage"), ...AUTH_ERRORS },
    },
  },
  "/entitlements": {
    get: {
      operationId: "entitlements", tags: ["Account"], summary: "Get plan limits",
      description: "Your plan's limits and features.",
      responses: { "200": json(ref("Entitlements"), "Limits"), ...AUTH_ERRORS },
    },
  },
  "/keys": {
    get: {
      operationId: "list_keys", tags: ["API keys"], summary: "List API keys",
      description: "Your API keys, never their secrets.",
      responses: { "200": json(ref("KeyList"), "Keys"), ...AUTH_ERRORS },
    },
    post: {
      operationId: "create_key", tags: ["API keys"], summary: "Create an API key",
      description: "Create another API key. The secret is shown only once.",
      requestBody: { required: true, content: { "application/json": { schema: ref("CreateKey") } } },
      responses: { "201": json(ref("CreatedKey"), "The new key, with its secret"), ...AUTH_ERRORS },
    },
  },
  "/keys/{key_id}": {
    delete: {
      operationId: "revoke_key", tags: ["API keys"], summary: "Revoke an API key",
      description: "The key stops working right away.",
      parameters: [{ name: "key_id", in: "path", required: true, schema: { type: "string" } }],
      responses: { "200": json(ref("RevokedKey"), "Revoked"), ...AUTH_ERRORS },
    },
  },
  "/billing/checkout": {
    post: {
      operationId: "billing_checkout", tags: ["Billing"], summary: "Get a checkout link",
      description: "A Stripe Checkout link that starts the Pro plan: $25 a month plus usage, card required. Open it in a browser. 409 if you already have an active plan.",
      requestBody: { required: false, content: { "application/json": { schema: ref("CheckoutRequest") } } },
      responses: { "200": json(ref("BillingLink"), "Checkout link"), ...AUTH_ERRORS, "409": errorResponse("You already have an active plan.") },
    },
  },
  "/billing/portal": {
    post: {
      operationId: "billing_portal", tags: ["Billing"], summary: "Get a billing portal link",
      description: "A Stripe billing portal link to update your card, see invoices or cancel. 409 before your first checkout.",
      requestBody: { required: false, content: { "application/json": { schema: ref("PortalRequest") } } },
      responses: { "200": json(ref("BillingLink"), "Portal link"), ...AUTH_ERRORS, "409": errorResponse("No subscription yet.") },
    },
  },
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

/** Remove `repo` fields and the hosted-mode header from engine schemas and parameters. */
function stripRepo(node) {
  if (Array.isArray(node)) {
    return node
      .filter((item) => !(item && typeof item === "object" && (item.$ref === "#/components/parameters/Repo" || (item.in && item.name === "repo"))))
      .map(stripRepo);
  }
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === "properties" && value && typeof value === "object") {
      out.properties = Object.fromEntries(Object.entries(value).filter(([name]) => name !== "repo").map(([name, v]) => [name, stripRepo(v)]));
    } else if (key === "required" && Array.isArray(value)) {
      out.required = value.filter((name) => name !== "repo");
    } else out[key] = stripRepo(value);
  }
  return out;
}

function setText(schemas, path, text) {
  const [name, ...rest] = path.split(".");
  let node = schemas[name];
  if (!node) throw new Error(`no schema ${name}`);
  for (const part of rest) {
    if (node.properties?.[part]) node = node.properties[part];
    else if (node.anyOf) node = node.anyOf.find((option) => option.properties?.[part])?.properties[part];
    else node = undefined;
    if (!node) throw new Error(`no field ${path}`);
  }
  node.description = text;
}

export function buildSpec(engine) {
  const schemas = stripRepo(clone(engine.components.schemas));
  for (const name of ENGINE_ONLY_SCHEMAS) delete schemas[name];
  for (const [name, fields] of Object.entries(DROPPED_FIELDS)) {
    for (const field of fields) delete schemas[name].properties[field];
  }
  for (const [path, text] of Object.entries(SCHEMA_TEXT)) setText(schemas, path, text);
  Object.assign(schemas, CLOUD_SCHEMAS);

  const paths = {};
  for (const [method, path, operationId, summary, tag, description] of ENGINE_ROUTES) {
    const source = engine.paths[path]?.[method];
    if (!source) throw new Error(`engine spec has no ${method.toUpperCase()} ${path}`);
    const op = stripRepo(clone(source));
    const parameters = (op.parameters ?? []).filter((p) => p.in !== "header");
    parameters.push(VERSION_PARAMETER);
    if (method !== "get") parameters.push(IDEMPOTENCY_HEADER);
    const responses = Object.fromEntries(Object.entries(op.responses).filter(([status]) => status !== "default"));
    if (op.requestBody?.content?.["application/octet-stream"]) {
      op.requestBody.description = "An https link (`{url, name}`), or up to 4 MB of raw bytes (`application/octet-stream`, named by `?name=`).";
    }
    const publicPath = path.replace(/^\/v3(?=\/)/, "");
    paths[publicPath] ??= {};
    paths[publicPath][method] = {
      operationId,
      tags: [tag],
      summary,
      description,
      ...(parameters.length ? { parameters } : {}),
      ...(op.requestBody ? { requestBody: op.requestBody } : {}),
      responses: { ...responses, ...ENGINE_ERRORS },
    };
  }
  for (const [path, item] of Object.entries(CLOUD_PATHS)) {
    const ops = clone(item);
    for (const op of Object.values(ops)) op.parameters = [...(op.parameters ?? []), VERSION_PARAMETER];
    paths[path] = { ...(paths[path] ?? {}), ...ops };
  }

  const sorted = Object.fromEntries(Object.keys(paths).sort().map((key) => [key, paths[key]]));
  return {
    openapi: "3.1.0",
    info: {
      title: "VidJutsu Cloud API",
      version: "3",
      description: "Video editing built for agents: upload takes, edit a timeline with history, and render it on cloud machines. The same operations are MCP tools at https://api.vidjutsu.ai/mcp.",
    },
    servers: [{ url: "https://api.vidjutsu.ai" }],
    security: [{ bearer: [] }],
    tags: ["Sign-up and sign-in", "Account", "API keys", "Billing", "Media", "Uploads", "Projects", "Audio", "Renders", "Status"].map((name) => ({ name })),
    paths: sorted,
    components: {
      securitySchemes: {
        bearer: {
          type: "http",
          scheme: "bearer",
          description: "A VidJutsu API key (`vj_live_...`) from POST /auth/verify or POST /keys, or an OAuth access token (MCP clients).",
        },
      },
      schemas: Object.fromEntries(Object.keys(schemas).sort().map((key) => [key, schemas[key]])),
    },
  };
}

export function renderSpec() {
  const engine = JSON.parse(readFileSync("openapi/engine.json", "utf8"));
  return `${JSON.stringify(buildSpec(engine), null, 2)}\n`;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const text = renderSpec();
  if (process.argv.includes("--check")) {
    if (readFileSync("docs/openapi/spec.json", "utf8") !== text) {
      console.error("docs/openapi/spec.json is stale: run node scripts/build-spec.mjs");
      process.exit(1);
    }
    console.log("docs/openapi/spec.json is current.");
  } else {
    writeFileSync("docs/openapi/spec.json", text);
    console.log("Wrote docs/openapi/spec.json.");
  }
}
