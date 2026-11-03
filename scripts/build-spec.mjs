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
  ["post", "/v3/media/{hash}/preview", "make_preview", "Make a preview", "Media",
    "Make a media item's preview files: a small proxy video, a filmstrip and a waveform. Billed by box time, once per media item. Answers with a job (`started: true`); poll `GET /jobs/{job_id}`, then read the preview. If the preview exists or is being made, `started` is false and nothing is charged. Send `project` to show its progress in that project's open editors."],
  ["get", "/v3/media/{hash}/preview", "media_preview", "Get a preview", "Media",
    "A media item's preview: `state` (`none`, `pending`, `ready` or `failed`) and, when ready, time-limited links to the proxy video, filmstrip and waveform. Free."],
  ["post", "/v3/media/{hash}/transcript", "make_transcript", "Make a transcript", "Media",
    "Transcribe a media item: words with start and end times, and speakers when known. Billed by box time, once per media item. Answers with a job (`started: true`); poll `GET /jobs/{job_id}`, then read the transcript. If it exists or is being made, `started` is false and nothing is charged. Send `project` to show its progress in that project's open editors."],
  ["get", "/v3/media/{hash}/transcript", "media_transcript", "Get a transcript", "Media",
    "A media item's transcript: `state` (`none`, `pending`, `ready` or `failed`) and, when ready, its language and a time-limited link (`words.url`) to a JSON array of words with start and end times. Free."],
  ["post", "/v3/uploads", "create_upload", "Start an upload", "Uploads",
    "Start a direct upload of a large file. Returns one presigned PUT link per part: PUT exactly `part_size` bytes to each (the last part may be shorter), keep each response's `ETag`, then complete the upload. If `already_stored` is true, complete it right away with `{}`."],
  ["post", "/v3/uploads/{upload_id}/complete", "complete_upload", "Complete an upload", "Uploads",
    "Finish a direct upload with every part's number and ETag. The stored bytes are checked against the SHA-256 you sent, then the file is added to your library. Completing again returns the same answer."],
  ["delete", "/v3/uploads/{upload_id}", "abort_upload", "Abort an upload", "Uploads",
    "Abandon a direct upload and the parts sent so far."],
  ["post", "/v3/projects", "init", "Create a project", "Projects",
    "Create a project: an edit timeline with history. Without a manifest it starts empty, with one video track (`v1`) and one audio track (`a1`)."],
  ["get", "/v3/projects/{project}", "show", "Get a project", "Projects",
    "A project's timeline at a branch head (default `main`) or at a given revision, with its manifest and length, the author, summary and time (`at`) of the revision, and who is in the project right now: `presence` (where people are in the editor: selection and playhead, so \"cut what I selected\" works from any agent) and `working_on` (what agents said they are about to do). It has an ETag: send it back as `If-None-Match` and an unchanged project answers 304 with no body."],
  ["get", "/v3/projects/{project}/head", "head", "Get the head revision", "Projects",
    "The project's head revision, its parent, author, summary, time (`at`) and length, without the timeline: a cheap check for changes before reading the whole project. It has an ETag: send it back as `If-None-Match` and an unchanged head answers 304 with no body."],
  ["post", "/v3/projects/{project}/edits", "edit", "Edit a timeline", "Projects",
    "Apply edit operations as one atomic commit. Any failing operation rejects the whole edit and leaves the timeline unchanged. Send `expected_head` (the revision you edited) so a retry can't apply twice. `summary` is the revision's line in history (default: written from the operations); the author is you, as history and the editor's Activity name you (send `author` to override). See [Editing](" + DOCS + "/guides/editing)."],
  ["get", "/v3/projects/{project}/timeline-words", "timeline_words", "Get the words on the timeline", "Projects",
    "The words heard on the edited timeline, in order: the script view. `items` holds words (`{kind: \"word\", text, start, end, track, occurrence, media, speaker?}`) and the pauses between them (`{kind: \"pause\", start, end, seconds}`) of at least `pause` seconds (default 0.5). Times are exact (`{ticks, rate}`), so a run of words or a pause can go straight into a `cut_pauses` range. Media without a transcript is listed in `untranscribed`. See [Edit with agents](" + DOCS + "/guides/agents#cut-by-the-script)."],
  ["post", "/v3/projects/{project}/undo", "undo", "Undo a change", "History",
    "Undo a revision, or one change of it, as a new revision. `change` is the change's `index` in history; leave it out to undo the whole revision. Undoing the head restores its parent exactly; undoing an older revision or one change puts back what it did (a cut comes back where it was, a moved or trimmed clip goes back) while keeping later edits. If a later edit touched the same thing, it answers 409 `conflict` with `reason: \"changed_since\"` and changes nothing. To redo, undo the undo. See [Undo and history](" + DOCS + "/guides/agents#undo-and-history)."],
  ["post", "/v3/projects/{project}/restore", "restore", "Restore a revision", "History",
    "Bring back an earlier revision's whole timeline as a new revision. Nothing is lost: the revisions in between stay in history. With `expected_head`, a moved head answers 409 (`reason: \"stale_head\"`)."],
  ["post", "/v3/projects/{project}/level", "level", "Level audio", "Audio",
    "Measure what each clip on the named audio tracks plays (EBU R128) and set gains so each plays at `target` LUFS, as one edit. `dry_run` measures without editing."],
  ["post", "/v3/projects/{project}/studio-sound", "studio_sound", "Turn on Studio Sound", "Audio",
    "Clean every voice on the project's audio tracks (noise, echo, tone and level) and swap the cleaned copies onto their clips, as one revision. Send `media` (media ids) to clean only those, so music is left alone. Billed by box time (about 1.5 cents a voice minute); a voice cleaned before is reused for free. Answers with a job: poll `GET /jobs/{job_id}`. `show` then reports `studio_sound` (`on`, `off` or `partial`) and the revision that turned it on; undo that revision to turn it off. If a Studio Sound job is already running, `started` is false and nothing is charged. See [Studio Sound](" + DOCS + "/guides/studio-sound)."],
  ["post", "/v3/projects/{project}/frames", "frame", "Get stills of the cut", "Look and check",
    "Stills of the timeline at the times you give, drawn by the renderer itself, so they show exactly what a render shows: every layer, its place and shape, fades and glides, and black in gaps. Each still is the output frame (30 fps) whose span holds the time, so `t - 1/30` and `t` are the frames either side of a cut at `t`. Answers 202 with a job; when it succeeds, `output.frames` has one still per time. Billed by the box time it uses, at $0.03 per vCPU-minute by the second, with no fee per frame. See [Look at and check a cut](" + DOCS + "/guides/look-and-check)."],
  ["post", "/v3/projects/{project}/checks", "check", "Check the cut", "Look and check",
    "Measure the cut before anyone watches it: gaps, stretches with no sound, black picture, silence, the loudness of the mix and of each section, and each audio clip's gain. Measured values only, never a score. Answers 202 with a job; when it succeeds, its `output` holds the measurements. Billed by the box time it uses, at $0.03 per vCPU-minute by the second. See [Look at and check a cut](" + DOCS + "/guides/look-and-check)."],
  ["post", "/v3/imports", "import_timeline", "Import a Descript timeline", "Projects",
    "Open a Descript timeline export (FCPXML or EDL) as a new project, at once. An export names files, not media, so ingest every file it names first and pass each ingest result in `files`. FCPXML brings picture and sound layer by layer, each picture full frame; EDL brings sound only, at exact sample times with volumes and fades. Captions and markers are skipped and counted in `skipped`. Anything that would change the picture or timing (transforms, effects, retiming, titles, transitions) is refused with a 400 naming it, never approximated. The request can be up to 4 MB. Free. See [Import from Descript](" + DOCS + "/guides/import-descript)."],
  ["post", "/v3/projects/{project}/renders", "render", "Start a render", "Renders",
    "Render a project's timeline (the branch head, or a pinned revision) on parallel cloud machines. Answers 202 with a job right away; poll it until it ends. Send an `Idempotency-Key` header so a retry returns the same job. Ranges that didn't change since a previous render are reused."],
  ["get", "/v3/jobs/{job_id}", "render_status", "Get a render job", "Renders",
    "A job's state and progress: a render, preview, transcript, Studio Sound, frame or check job. Once a render has succeeded, `output.url` is a fresh 7-day download link on every read; a finished frame job has its stills in `output.frames`, and a check its measurements in `output`."],
  ["post", "/v3/jobs/{job_id}/cancel", "cancel_render", "Cancel a render", "Renders",
    "Stop a render job and its machines. You pay only for the output already rendered."],
];

// Schema text that names engine internals is rewritten for customers.
const SCHEMA_TEXT = {
  StudioSound: "Which voices to clean. Every field is optional.",
  FrameProject: "Stills of the branch head (or a pinned revision) at timeline times, made as a job.",
  CheckProject: "Measure the branch head (or a pinned revision), as a job. Every field is optional.",
  ImportTimeline: "A Descript timeline export (FCPXML or EDL) to open as a new project, and an ingest result for every file it names.",
  "StudioSound.media": "Clean only these voices (media ids played on audio tracks). Leave it out to clean every media item the audio tracks play, music included, so name your voices when there is music.",
  RestoreProject: "The revision whose timeline comes back, and optionally the head you decided against (`expected_head`) and a line for history (`summary`).",
  UndoProject: "The revision to undo and, optionally, one change of it (`change`, its `index` in history). Undoing the head as a whole restores its parent; anything else puts back what the change did on top of the current head, so later edits stay.",
  "RestoreProject.author": "Who is doing it, as history and Activity name them. Default: you.",
  "UndoProject.author": "Who is doing it, as history and Activity name them. Default: you.",
  "EditProject.author": "Who is editing, as history and Activity name them. Default: you.",
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
  "Job.usage": "What the job used, once machines have run (also for failed and canceled jobs); null when none ran.",
  "Job.usage.source_seconds": "A preview or transcript: length of the source. Studio Sound: length of the voices cleaned. Null when it failed.",
};

// Words that must never reach the public spec: internal names, vendors and versioned paths.
const BANNED_TEXT = [/vcore/i, /auphonic/i, /\/v3\b/, /\bboxes have\b/];

// Fields the cloud adds to engine schemas.
const TIME = { oneOf: [{ type: "number" }, { type: "string" }, { type: "object", properties: { ticks: { type: "integer" }, rate: { type: "integer" } } }], description: "Seconds (`12`, `\"12.5\"`), a fraction (`\"1001/30000\"`) or `{ticks, rate}`." };
const SOURCE_FIELD = { type: "object", additionalProperties: true, description: "Where the file came from, for example `{\"type\": \"hyperframes\", \"project\": \"intro\", \"version\": 3}`. `files` shows it, so an agent knows what to edit to change the file." };
const PROJECT_HINT = { type: "string", description: "The project this file is for. Its open editors show the progress." };
const ADDED_FIELDS = {
  IngestUrl: { source: SOURCE_FIELD, project: PROJECT_HINT },
  CompleteUpload: { source: SOURCE_FIELD, project: PROJECT_HINT },
  StartUpload: { project: PROJECT_HINT },
  Project: {
    presence: { type: "array", items: { type: "object", additionalProperties: true }, description: "People in the project in the editor right now: who, their `selection` (`{start, end, clips?}`) and `playhead`. Set with POST /projects/{project}/presence." },
    working_on: { type: "array", items: { type: "object", additionalProperties: true }, description: "What agents said they are doing right now: who, `text`, and the `clips`, `range` or `scene` they will touch. Set with POST /projects/{project}/working_on." },
  },
};
// Engines answer these with no body; the cloud takes `project` so the project's editors show the job.
const PROJECT_HINT_BODY = { required: false, content: { "application/json": { schema: { type: "object", properties: { project: PROJECT_HINT } } } } };

// Engine-only fields the cloud doesn't take.
const DROPPED_FIELDS = { RenderProject: ["ffmpeg"] };
const ENGINE_ONLY_SCHEMAS = ["Health", "JsonRpc", "Purged", "Storage", "CleanAudio"];

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
    reason: { type: "string", description: "Finer cause, for example `no_plan`, `insufficient_credits`, `payment_failed`, `spend_limit`, `stale_head`." },
    checkout_url: { type: "string", description: "402 `no_plan`: a Stripe Checkout link to add a card and make your first payment." },
    top_up_url: { type: "string", description: "402 `insufficient_credits` or `payment_failed`: a Stripe link to add credits to your wallet." },
    media_deletes_at: { type: "string", format: "date-time", description: "402 `payment_failed` (wallet below zero): when your stored media will be deleted unless you top up." },
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
  "402": errorResponse("Not signed up yet (`no_plan`, with `checkout_url`), or your wallet doesn't cover this or is below zero (`insufficient_credits` or `payment_failed`, with `top_up_url`)."),
  "403": errorResponse("A limit was reached (`plan_limit`, with `reason` and `contact_url`)."),
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

const AMOUNT_USD = (fallback) => ({
  oneOf: [{ type: "number" }, { type: "string", pattern: "^\\d{1,6}(\\.\\d{1,2})?$" }],
  description: `Dollars, in whole cents, from 5 to 500 (for example \`25\` or \`"12.50"\`). Default ${fallback}.`,
});

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
      checkout_url: { type: "string", description: "When `status` is `no_plan`: a Stripe Checkout link to add a card and make your first payment ($5 or more)." },
      note: { type: "string" },
    },
  },
  AccountStatus: {
    type: "string",
    enum: ["no_plan", "active", "payment_failed"],
    description: "`no_plan`: make your first payment (POST /billing/checkout) to start work. `active`: everything works. `payment_failed`: your wallet is below zero; reads work, new work is paused until you top up (POST /billing/top-up).",
  },
  Account: {
    type: "object",
    required: ["account_id", "status"],
    properties: {
      account_id: { type: "string" },
      status: ref("AccountStatus"),
      plan_version: { type: ["object", "null"], description: "The price list your account uses: `{plan_key, version}`.", additionalProperties: true },
      media_deletes_at: { type: ["string", "null"], format: "date-time", description: "While your wallet is below zero: when stored media will be deleted unless you top up." },
    },
  },
  Usage: {
    type: "object",
    additionalProperties: true,
    description: "Your wallet balance (`credits.balance_micros`) and auto top-up setting (`credits.auto_top_up`), this month's usage of each meter (render minutes up to 1080p, render minutes above 1080p, storage), spend against your monthly limit, renders running and storage used. Money is in micro-dollars. `{\"state\": \"unavailable\"}` when it can't be read right now.",
  },
  Entitlements: {
    type: "object",
    additionalProperties: true,
    description: "`{\"state\": \"available\", \"entitlements\": {...}, \"spend_limit_micros\": ...}`: your limits and features. Money is in micro-dollars.",
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
      amount_usd: AMOUNT_USD("5"),
      success_url: { type: "string", format: "uri", description: "https URL to return to after paying." },
      cancel_url: { type: "string", format: "uri", description: "https URL to return to if you cancel." },
    },
  },
  AutoTopUpRequest: {
    type: "object",
    required: ["enabled"],
    properties: {
      enabled: { type: "boolean", description: "Turn auto top-up on or off." },
      threshold_usd: { oneOf: [{ type: "number" }, { type: "string", pattern: "^\\d{1,6}(\\.\\d{1,2})?$" }], description: "Top up when usage takes your balance below this many dollars. Whole cents, above 0 and up to 500. Default 5." },
      amount_usd: AMOUNT_USD("10"),
    },
  },
  AutoTopUpSetting: {
    type: "object",
    required: ["auto_top_up"],
    properties: {
      auto_top_up: {
        type: ["object", "null"],
        description: "Null when auto top-up is off.",
        properties: {
          enabled: { type: "boolean", description: "False after a declined card, until you save a card again." },
          threshold_micros: { type: "integer", description: "Top up below this balance, in micro-dollars." },
          amount_micros: { type: "integer", description: "Each automatic charge, in micro-dollars." },
          last_failure: { type: ["string", "null"], description: "Why the last automatic charge failed, if it did." },
          last_failure_at: { type: ["number", "null"], description: "When the last automatic charge failed, in Unix milliseconds." },
        },
      },
    },
  },
  TopUpRequest: {
    type: "object",
    properties: {
      amount_usd: AMOUNT_USD("10"),
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
      amount_micros: { type: "integer", description: "Checkout and top-up: the payment amount, in micro-dollars." },
      reused: { type: "boolean", description: "Checkout only: an open checkout session was reused." },
    },
  },
};

// ---- The editor's tools: answered by the cloud (shot list, history, layouts, live, comments, prices) ----

const obj = (properties, extra = {}) => ({ type: "object", additionalProperties: true, properties, ...extra });
const str = (description) => ({ type: "string", description });
const PROJECT_PARAM = { name: "project", in: "path", required: true, schema: { type: "string" }, description: "The project name." };
const pathParam = (name, description) => ({ name, in: "path", required: true, schema: { type: "string" }, description });
const queryParam = (name, schema, description) => ({ name, in: "query", required: false, schema, description });
const CONFLICT = (text) => ({ "409": errorResponse(text) });

const EDITOR_SCHEMAS = {
  Time: TIME,
  Range: obj({ start: ref("Time"), end: ref("Time") }, { required: ["start", "end"], description: "A stretch of the timeline. Ends are exclusive." }),
  ProjectList: obj({
    projects: { type: "array", items: obj({ project: str("The project name."), revision: str("Its head revision."), duration_seconds: { type: "number" }, updated_at: str("When it last changed.") }) },
    next_cursor: { type: ["string", "null"], description: "Pass as `cursor` for the next page; null on the last page." },
  }),
  Events: obj({
    events: { type: "array", items: obj({ seq: { type: "integer" }, type: str("`revision`, `comment`, `shot_list` or `job`."), data: { type: "object", additionalProperties: true, description: "What happened: who, and the revision, clips, comment or job it is about." }, created_at: { type: "integer", description: "Unix seconds." } }), description: "Change notices, oldest first, up to 200 a page. Each is short: read details with the usual routes." },
    last_seq: { type: "integer", description: "The newest notice's sequence number. Pass it as `after` next time." },
    reset: { type: "boolean", description: "Older notices were dropped (they are kept a day): read the project again." },
  }),
  PresenceRequest: obj({
    selection: { oneOf: [obj({ start: ref("Time"), end: ref("Time"), clips: { type: "array", items: { type: "string" } } }), { type: "null" }], description: "What is selected, or null to clear it." },
    playhead: { oneOf: [ref("Time"), { type: "null" }], description: "Where the playhead is, or null to clear it." },
  }, { description: "Fields you leave out stay as they were." }),
  WorkingOnRequest: obj({
    text: { type: ["string", "null"], description: "What you are about to do, in a few words (\"Cutting the pauses in scene 2\"). null clears it." },
    clips: { type: "array", items: { type: "string" }, description: "The clips you will touch." },
    range: ref("Range"),
    scene: str("The shot list scene you are working on."),
  }, { required: ["text"] }),
  Live: obj({ presence: { type: "array", items: { type: "object", additionalProperties: true } }, working_on: { type: "array", items: { type: "object", additionalProperties: true } } }),
  Comment: obj({
    comment_id: str(""), text: str(""), quote: { type: ["string", "null"], description: "The words the comment quotes." },
    start: { type: ["number", "null"], description: "Seconds." }, end: { type: ["number", "null"], description: "Seconds." },
    revision: str("The revision the times refer to."), author: str(""), resolved: { type: "boolean" },
    reply_to: { type: ["string", "null"], description: "The first comment of the thread, for replies." },
    created_at: str(""),
  }),
  CommentList: obj({ comments: { type: "array", items: ref("Comment") } }),
  AddComment: obj({
    text: str("The comment."),
    start: ref("Time"), end: ref("Time"), time: ref("Time"),
    quote: str("The words it is about."),
    revision: str("The revision the times refer to. Default: the current one."),
    reply_to: str("Reply to this comment's thread. A reply shares the thread's range."),
  }, { required: ["text"], description: "A range (`start`, `end`), a moment (`time`), or a reply (`reply_to`)." }),
  ResolveComment: obj({ resolved: { type: "boolean", description: "true resolves the thread; false reopens it." } }, { required: ["resolved"] }),
  Layout: obj({
    x: { type: "integer" }, y: { type: "integer" }, width: { type: "integer" }, height: { type: "integer" },
    shape: { type: "string", enum: ["square", "rounded", "circle"] },
    radius: { type: "integer", description: "Rounded corners, in thousandths of the shorter side (default 140)." },
    crop: obj({ x: { type: "integer" }, y: { type: "integer" }, width: { type: "integer" }, height: { type: "integer" } }, { description: "The part of the source to show." }),
    fit: { type: "string", enum: ["stretch", "cover", "contain"] },
    hidden: { type: "boolean" },
    cut: { type: "boolean", description: "Jump to this layout instead of gliding from the one before." },
  }, { description: "A place on a 1000x1000 canvas: `{x, y, width, height}` plus optional shape, radius, crop, fit, hidden and cut." }),
  LayoutPreset: obj({
    id: str(""), name: str(""), builtin: { type: "boolean" },
    parts: obj({ screen: ref("Layout"), camera: ref("Layout") }),
  }),
  LayoutList: obj({ layouts: { type: "array", items: ref("LayoutPreset") } }),
  SaveLayout: obj({ name: str("The preset's name. Saving again under a name replaces it; built-in names are taken."), screen: ref("Layout"), camera: ref("Layout") }, { required: ["name", "screen", "camera"] }),
  SavedLayout: obj({ layout: ref("LayoutPreset"), replaced: { type: "boolean" } }),
  ApplyLayout: obj({
    preset: str("A preset id or name from GET /layouts."),
    from: ref("Time"), to: ref("Time"),
    screen_track: str("The screen's video track. Default: found from the files' kinds, else the lowest video track."),
    camera_track: str("The camera's video track. Default: found from the files' kinds, else the next video track."),
    expected_head: str("The head you decided against; a moved head is a conflict."),
  }, { required: ["preset"], description: "Leave out `from` and `to` for the whole video." }),
  AppliedLayout: obj({
    layout: obj({ id: str(""), name: str("") }, { description: "The preset applied." }),
    applied: { type: "array", items: obj({ role: { type: "string", enum: ["screen", "camera"] }, track: str("") }) },
    warning: str("Present when the camera's track is under the screen's. Tracks draw bottom to top, so the screen hides the camera wherever it covers it: keep the camera on a higher track."),
  }, { description: "The edit (like POST /projects/{project}/edits answers) plus the preset, which track got which part, and a warning when the camera would be hidden." }),
  ShotFile: obj({
    media: str("The file's hash."), media_id: str(""), name: str(""),
    kind: { type: "string", enum: ["camera", "screen", "audio", "video", "image", "file"] },
    seconds: { type: "number" }, shot: str("The shot it is tagged with."),
    recording: str("The recording it was part of, when the editor recorded screen and camera together."),
    source: { ...SOURCE_FIELD, type: ["object", "null"] },
    on_timeline: { type: "array", items: obj({ clip: str(""), track: str(""), start_seconds: { type: "number" }, end_seconds: { type: "number" } }), description: "Where it is used on the timeline." },
  }),
  Shot: obj({
    id: str(""), talking: { type: "array", items: { type: "string" }, description: "Talking points." },
    script: str("A rough line."), visual: { type: ["object", "null"], additionalProperties: true, description: "The key visual: `{media?, name?, note?}`." },
    layout: str("The layout preset to use."),
  }),
  ShotList: obj({
    revision: { type: "integer", description: "The shot list's own revision. Send it back as `expected_revision`." },
    timeline_revision: { type: ["string", "null"] },
    scenes: { type: "array", items: obj({ id: str(""), title: str(""), shots: { type: "array", items: ref("Shot") }, media: { type: "array", items: ref("ShotFile") } }) },
    created: { type: "array", items: { type: "string" }, description: "After an edit: the new scene and shot ids, in order." },
  }),
  ShotListEdit: obj({
    expected_revision: { type: "integer", description: "The revision you read (0 for a new shot list)." },
    operations: { type: "array", minItems: 1, items: obj({ op: { type: "string", enum: ["add_scene", "rename_scene", "move_scene", "remove_scene", "add_shot", "set_shot", "move_shot", "remove_shot", "attach_media", "detach_media"] } }, { required: ["op"] }), description: "Applied in order, all or none. See [Plan with the shot list](" + DOCS + "/guides/shot-list#operations)." },
  }, { required: ["expected_revision", "operations"] }),
  FileList: obj({ files: { type: "array", items: { allOf: [ref("ShotFile"), obj({ scene: { type: ["string", "null"], description: "Its scene, or null if it isn't filed under one." }, scene_title: str("") })] } } }),
  WordSearch: obj({
    query: str(""),
    matches: { type: "array", items: obj({ media: str(""), name: str(""), scene: { type: ["string", "null"] }, shot: str(""), start_seconds: { type: "number" }, end_seconds: { type: "number" }, text: str("The words matched."), before: str("A few words before."), after: str("A few words after.") }) },
    total: { type: "integer" }, searched: { type: "integer" },
    not_transcribed: { type: "array", items: { type: "string" }, description: "Files without a transcript (make one with POST /media/{hash}/transcript)." },
  }),
  History: obj({
    project: str(""),
    entries: { type: "array", items: obj({
      kind: { type: "string", enum: ["init", "edit", "level", "restore", "undo", "studio_sound", "shot_list"] },
      revision: str("Timeline entries: the revision."), parent: str(""),
      shot_list_revision: { type: "integer", description: "Shot list entries: the shot list's revision." },
      author: { type: ["string", "null"] }, summary: str("One line."), at: str("When."),
      changes: { type: "array", items: obj({ index: { type: "integer", description: "Pass as `change` to undo just this one." }, kind: str(""), summary: str(""), at_seconds: { type: "number" }, seconds: { type: "number" }, undoable: { type: "boolean" }, words: { type: "array", items: { type: "string" }, description: "The words a cut took out." } }) },
    }) },
    next: { type: ["string", "null"], description: "Pass as `before` for the next page; null on the last page." },
  }),
  ShotListImport: obj({
    expected_revision: { type: "integer", description: "The shot list revision you read." },
    episode: { type: "object", additionalProperties: true, description: "The whole episode plan (`episode.json`, `schemaVersion` 2)." },
    replace: { type: "boolean", description: "Remove every scene first (their files stay in the project). Default false: scenes go after the last one." },
  }, { required: ["expected_revision", "episode"] }),
  Money: obj({
    cost_micros: { type: "integer" }, cost_usd: { type: "number" },
    wallet_after_micros: { type: "integer", description: "Your balance after it (never below zero)." },
    estimated_vcpu_seconds: { type: "number", description: "The box time the job is expected to use, in vCPU-seconds, at $0.03 per vCPU-minute. The charge is the box time it actually uses, by the second, with no minimum." },
    allowed: { type: "boolean", description: "Whether your wallet would let it start." },
    reason: { type: ["string", "null"], description: "Why not, when it wouldn't: `no_plan`, `payment_failed`, `spend_limit` or `insufficient_credits`." },
    message: { type: ["string", "null"] },
  }, { description: "Money is in micro-dollars (`_micros`, 1,000,000 = $1) with a dollar twin (`_usd`)." }),
  Quote: obj({
    project: str(""), revision: { type: ["string", "null"] }, length_seconds: { type: "number" },
    balance_micros: { type: "integer" }, balance_usd: { type: "number" },
    render: { type: "array", items: { allOf: [ref("Money"), obj({ quality: str("`1080p` or `4k`."), height: { type: "integer" } })] }, description: "A render of the current timeline at each quality your plan has." },
    studio_sound: { oneOf: [{ allOf: [ref("Money"), obj({ voice_seconds: { type: "number" }, media: { type: "array", items: { type: "string" }, description: "The voices it would clean." } })] }, { type: "null" }], description: "Studio Sound on the voice files. Voices cleaned before are free." },
  }),
  Wallet: obj({
    standing: ref("AccountStatus"),
    balance_micros: { type: "integer" }, balance_usd: { type: "number" },
    card_on_file: { type: "boolean" },
    auto_top_up: { type: ["object", "null"], additionalProperties: true, description: "On, threshold, amount and the last failure, or null when off." },
    top_up: { type: "object", additionalProperties: true, description: "The smallest and largest top-up." },
    spend: { type: ["object", "null"], additionalProperties: true, description: "This period's usage spend (`used_micros`), your monthly limit (`limit_micros`) and when it resets." },
  }, { description: "Money is in micro-dollars with `_usd` twins." }),
};

const EDITOR_PATHS = {
  "/projects": {
    get: {
      operationId: "list_projects", tags: ["Projects"], summary: "List projects",
      description: "Your projects, most recently changed first: name, head revision, length and `updated_at`. Pages of up to 100 (`limit`, default 50); pass `next_cursor` as `cursor` for the next page.",
      parameters: [queryParam("cursor", { type: "string" }, "From the previous page."), queryParam("limit", { type: "integer", minimum: 1, maximum: 100 }, "Default 50.")],
      responses: { "200": json(ref("ProjectList"), "Projects"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/history": {
    get: {
      operationId: "history", tags: ["History"], summary: "Get history",
      description: "The project's history, newest first: every timeline revision (`init`, `edit`, `level`, `restore`, `undo`, with its author, summary, time and changes, including the words a cut took out) and every shot list change, merged by time. Undo a timeline change with POST /projects/{project}/undo; bring a revision back with POST /projects/{project}/restore. See [Undo and history](" + DOCS + "/guides/agents#undo-and-history).",
      parameters: [PROJECT_PARAM, queryParam("limit", { type: "integer", minimum: 1, maximum: 100 }, "Default 20."), queryParam("before", { type: "string" }, "The previous page's `next`.")],
      responses: { "200": json(ref("History"), "History"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/shot-list": {
    get: {
      operationId: "shot_list", tags: ["Shot list"], summary: "Get the shot list",
      description: "The project's plan: scenes in order, each with its shots (talking points, script, key visual, layout) and the files filed under it (takes and anything attached), with each file's name, kind, length, the shot it is tagged with, and where it is on the timeline. A project with no shot list answers revision 0 and no scenes. See [Plan with the shot list](" + DOCS + "/guides/shot-list).",
      parameters: [PROJECT_PARAM],
      responses: { "200": json(ref("ShotList"), "The shot list"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/shot-list/edits": {
    post: {
      operationId: "shot_list_edit", tags: ["Shot list"], summary: "Edit the shot list",
      description: "Change the shot list with a batch of operations, applied all or none. None of them touch the timeline: assemble the cut with POST /projects/{project}/edits. If `expected_revision` is stale, nothing changes and the 409 (`reason: \"stale_revision\"`) carries the current `shot_list`. Answers the shot list plus `created`: the new scene and shot ids in order.",
      parameters: [PROJECT_PARAM],
      requestBody: { required: true, content: { "application/json": { schema: ref("ShotListEdit") } } },
      responses: { "200": json(ref("ShotList"), "The edited shot list"), ...AUTH_ERRORS, ...CONFLICT("Someone changed the shot list first (`stale_revision`): read it again and redo your edit.") },
    },
  },
  "/projects/{project}/files": {
    get: {
      operationId: "files", tags: ["Shot list"], summary: "List a project's files",
      description: "Every file in the project, by name: the files filed under each scene (in shot list order), files that were filed once and taken out (`scene` null), and any other file on the timeline. Each has its hash, name, kind, length, scene, shot, `on_timeline` clips and `source`: where it came from, so you know what to edit to change it.",
      parameters: [PROJECT_PARAM],
      responses: { "200": json(ref("FileList"), "Files"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/words": {
    get: {
      operationId: "search_words", tags: ["Shot list"], summary: "Search spoken words",
      description: "Find spoken words across every file in the project, matched in order, ignoring case and punctuation. Each match has the file, where in it the words are, and a few words before and after. Files without a transcript are listed in `not_transcribed`.",
      parameters: [PROJECT_PARAM, { ...queryParam("query", { type: "string", maxLength: 200 }, "One or more words."), required: true }, queryParam("limit", { type: "integer", minimum: 1, maximum: 200 }, "Default 50.")],
      responses: { "200": json(ref("WordSearch"), "Matches"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/events": {
    get: {
      operationId: "events", tags: ["Live updates"], summary: "Get change notices",
      description: "A project's change notices after a sequence number: new revisions with who made them and the clips they touched, comments added, resolved or deleted, shot list changes, and jobs starting and ending. Each has a `seq`; pass the last one as `after`. `reset: true` means older notices are gone, so read the project again. Send `Accept: text/event-stream` to get the same notices as a live stream instead. See [Live updates](" + DOCS + "/guides/live-updates).",
      parameters: [PROJECT_PARAM, queryParam("after", { type: "integer", minimum: 0 }, "Default 0."), queryParam("limit", { type: "integer" }, "")],
      responses: {
        "200": {
          description: "Notices as JSON, or with `Accept: text/event-stream`, a Server-Sent Events stream.",
          content: { "application/json": { schema: ref("Events") }, "text/event-stream": { schema: { type: "string", description: "Events `ready`, `revision`, `comment`, `shot_list`, `job`, `presence`, `working_on` and `reset`." } } },
        },
        ...AUTH_ERRORS,
      },
    },
  },
  "/projects/{project}/presence": {
    post: {
      operationId: "set_presence", tags: ["Live updates"], summary: "Set presence",
      description: "Say where you are in a project: `selection` and `playhead`, or null to clear either. The editor writes this about once a second, and GET /projects/{project} returns it, so an agent can act on \"what I selected\". It goes away a minute after the last write.",
      parameters: [PROJECT_PARAM],
      requestBody: { required: true, content: { "application/json": { schema: ref("PresenceRequest") } } },
      responses: { "200": json(ref("Live"), "Who is in the project now"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/working_on": {
    post: {
      operationId: "working_on", tags: ["Live updates"], summary: "Say what you're working on",
      description: "Say what you are about to do before you do it, so the person sees it in the editor: `text`, and the `clips`, `range` or `scene` you will touch. It clears on your next edit, or two minutes after your last call; call again to refresh it, or send `text: null` to clear it.",
      parameters: [PROJECT_PARAM],
      requestBody: { required: true, content: { "application/json": { schema: ref("WorkingOnRequest") } } },
      responses: { "200": json(ref("Live"), "Who is in the project now"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/comments": {
    get: {
      operationId: "comments", tags: ["Comments"], summary: "List comments",
      description: "A project's comments, oldest first: text, quote, start and end on the timeline at a revision, author, resolved, and `reply_to` for replies.",
      parameters: [PROJECT_PARAM],
      responses: { "200": json(ref("CommentList"), "Comments"), ...AUTH_ERRORS },
    },
    post: {
      operationId: "add_comment", tags: ["Comments"], summary: "Add a comment",
      description: "Comment on a range (`{text, start, end}`) or a moment (`{text, time}`) of the timeline, optionally with the quoted words and the revision it refers to (default: the current one). To reply, send `{text, reply_to}`. The author is you.",
      parameters: [PROJECT_PARAM],
      requestBody: { required: true, content: { "application/json": { schema: ref("AddComment") } } },
      responses: { "200": json(ref("Comment"), "The comment"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/comments/{comment_id}": {
    post: {
      operationId: "resolve_comment", tags: ["Comments"], summary: "Resolve or reopen a comment",
      description: "Resolve (`{resolved: true}`) or reopen (`{resolved: false}`) a comment's thread.",
      parameters: [PROJECT_PARAM, pathParam("comment_id", "The comment.")],
      requestBody: { required: true, content: { "application/json": { schema: ref("ResolveComment") } } },
      responses: { "200": json(ref("Comment"), "The comment"), ...AUTH_ERRORS },
    },
    delete: {
      operationId: "delete_comment", tags: ["Comments"], summary: "Delete a comment",
      description: "Delete a comment. Deleting a thread's first comment deletes its replies.",
      parameters: [PROJECT_PARAM, pathParam("comment_id", "The comment.")],
      responses: { "200": json(obj({ deleted: { type: "boolean" } }), "Deleted"), ...AUTH_ERRORS },
    },
  },
  "/layouts": {
    get: {
      operationId: "layouts", tags: ["Layouts"], summary: "List layout presets",
      description: "Screen and camera layout presets: the six built-ins (`circle_corner`, `square_corner`, `side_by_side`, `camera_third`, `camera_only`, `screen_only`) and the ones saved to your account, the same list the editor shows. See [Screen and camera layouts](" + DOCS + "/guides/layouts).",
      responses: { "200": json(ref("LayoutList"), "Presets"), ...AUTH_ERRORS },
    },
    post: {
      operationId: "save_layout", tags: ["Layouts"], summary: "Save a layout preset",
      description: "Save a layout preset to your account. Saving again under the same name replaces it. Built-in names are taken.",
      requestBody: { required: true, content: { "application/json": { schema: ref("SaveLayout") } } },
      responses: { "200": json(ref("SavedLayout"), "Saved"), ...AUTH_ERRORS },
    },
  },
  "/layouts/{layout_id}": {
    delete: {
      operationId: "delete_layout", tags: ["Layouts"], summary: "Delete a layout preset",
      description: "Delete a saved layout preset. Built-ins can't be deleted.",
      parameters: [pathParam("layout_id", "The preset's id.")],
      responses: { "200": json(obj({ deleted: { type: "boolean" } }), "Deleted"), ...AUTH_ERRORS },
    },
  },
  "/projects/{project}/layout": {
    post: {
      operationId: "apply_layout", tags: ["Layouts"], summary: "Apply a layout preset",
      description: "Lay out the screen and the camera with a preset, as one revision with Undo. Leave out `from` and `to` for the whole video. The screen and camera tracks are found from the files' kinds (`screen`, `camera`), else the lowest video track is the screen and the next one the camera; `screen_track` and `camera_track` override. It sends one `set_layout` per part over the range, the same edit the editor makes. If the camera's track is under the screen's, the answer has a `warning`, because the screen would hide the camera.",
      parameters: [PROJECT_PARAM],
      requestBody: { required: true, content: { "application/json": { schema: ref("ApplyLayout") } } },
      responses: { "200": json(ref("AppliedLayout"), "The edit"), ...AUTH_ERRORS, ...CONFLICT("The head moved (`stale_head`): read the project again.") },
    },
  },
  "/projects/{project}/shot-list/import": {
    post: {
      operationId: "shot_list_import", tags: ["Shot list"], summary: "Import an episode plan",
      description: "Bring an episode plan (`episode.json`, `schemaVersion` 2) in as the shot list. Each group becomes a scene and each beat a shot, in order: talking points from its talking notes (the first led by the beat's label), its script, and a visual named after the first matched clip with the visual notes as its note. Ids come from the episode, so a scene or shot is easy to find again. Nothing is shortened: a beat past the shot list's limits is refused by name. The timeline is not touched. The request can be up to 4 MB. Answers the shot list plus `created` and `imported` (`title`, `scenes`, `shots`, `replaced`).",
      parameters: [PROJECT_PARAM],
      requestBody: { required: true, content: { "application/json": { schema: ref("ShotListImport") } } },
      responses: { "200": json(ref("ShotList"), "The shot list"), ...AUTH_ERRORS, ...CONFLICT("Someone changed the shot list first (`stale_revision`): read it again and import again.") },
    },
  },
  "/projects/{project}/quote": {
    get: {
      operationId: "quote", tags: ["Billing"], summary: "Get a price quote",
      description: "What it would cost, before you spend: estimates for a render of the project's current timeline at each quality (1080p, 4K) and Studio Sound on it, priced from your plan, and whether your wallet would let each start. Jobs are charged the box time they use, so these are estimates. Studio Sound covers every voice file on the audio tracks, or only `media`; voices cleaned before are free. Free to call.",
      parameters: [PROJECT_PARAM, queryParam("media", { type: "string" }, "Studio Sound on only these media ids, separated by commas.")],
      responses: { "200": json(ref("Quote"), "Prices"), ...AUTH_ERRORS },
    },
  },
  "/wallet": {
    get: {
      operationId: "wallet", tags: ["Billing"], summary: "Get your wallet",
      description: "Your prepaid wallet: balance, whether a card is on file, auto top-up (on, threshold, amount, last failure), the top-up range, and this period's spend against your monthly usage limit. Money is in micro-dollars (1,000,000 = $1) with `_usd` twins.",
      responses: { "200": json(ref("Wallet"), "Your wallet"), ...AUTH_ERRORS },
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
      description: "Check the emailed code. Creates your account on first sign-in and returns a new API key. A new account has no credits yet: open `checkout_url` to add a card and make your first payment.",
      requestBody: { required: true, content: { "application/json": { schema: ref("SignInVerify") } } },
      responses: { "201": json(ref("SignedIn"), "Signed in, with a new API key"), default: errorResponse("400 invalid_request (wrong or expired code), 429 rate_limited") },
    },
  },
  "/account": {
    get: {
      operationId: "account", tags: ["Account"], summary: "Get your account",
      description: "Your account id and status, and when stored media will be deleted if your wallet is below zero.",
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
      description: "Your wallet balance and this month's usage and spend.",
      responses: { "200": json(ref("Usage"), "Usage"), ...AUTH_ERRORS },
    },
  },
  "/entitlements": {
    get: {
      operationId: "entitlements", tags: ["Account"], summary: "Get your limits",
      description: "Your limits and features: spend limit, render minutes, storage, renders at once, largest upload, longest render, 4K.",
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
      description: "Sign up for paid use: a Stripe Checkout link to add a card and make your first payment into your prepaid wallet ($5 by default). There is no monthly fee; usage is paid from the wallet. Open it in a browser. 409 once your wallet is set up: use POST /billing/top-up.",
      requestBody: { required: false, content: { "application/json": { schema: ref("CheckoutRequest") } } },
      responses: { "200": json(ref("BillingLink"), "Checkout link"), ...AUTH_ERRORS, "409": errorResponse("Your wallet is already set up.") },
    },
  },
  "/billing/top-up": {
    post: {
      operationId: "billing_top_up", tags: ["Billing"], summary: "Get a top-up link",
      description: "A Stripe payment link to add credits to your wallet, which pays for all usage. Any time; $10 by default. Open it in a browser. `GET /usage` shows the new balance once the payment goes through.",
      requestBody: { required: false, content: { "application/json": { schema: ref("TopUpRequest") } } },
      responses: { "200": json(ref("BillingLink"), "Top-up link"), ...AUTH_ERRORS, default: errorResponse("400 invalid_request (an amount outside $5 to $500, or not whole cents)") },
    },
  },
  "/billing/auto-top-up": {
    post: {
      operationId: "billing_auto_top_up", tags: ["Billing"], summary: "Set auto top-up",
      description: "Turn auto top-up on or off. When usage takes your wallet below `threshold_usd` (default $5), or a render is refused for credits, the card you saved at sign-up is charged `amount_usd` (default $10), at most 5 times a day. A declined card turns it off until you save a card again. `GET /usage` shows the setting. 409 before your first payment.",
      requestBody: { required: true, content: { "application/json": { schema: ref("AutoTopUpRequest") } } },
      responses: { "200": json(ref("AutoTopUpSetting"), "The setting"), ...AUTH_ERRORS, "409": errorResponse("No saved card yet: use POST /billing/checkout first."), default: errorResponse("400 invalid_request (an amount or threshold out of range, or not whole cents)") },
    },
  },
  "/billing/portal": {
    post: {
      operationId: "billing_portal", tags: ["Billing"], summary: "Get a billing portal link",
      description: "A Stripe billing portal link to update your saved card or see payment receipts. 409 before your first payment.",
      requestBody: { required: false, content: { "application/json": { schema: ref("PortalRequest") } } },
      responses: { "200": json(ref("BillingLink"), "Portal link"), ...AUTH_ERRORS, "409": errorResponse("No payment yet: use POST /billing/checkout first.") },
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
  for (const [name, fields] of Object.entries(ADDED_FIELDS)) {
    if (!schemas[name]?.properties) throw new Error(`no schema ${name}`);
    Object.assign(schemas[name].properties, fields);
  }
  for (const [path, text] of Object.entries(SCHEMA_TEXT)) setText(schemas, path, text);
  Object.assign(schemas, CLOUD_SCHEMAS, EDITOR_SCHEMAS);

  const paths = {};
  for (const [method, path, operationId, summary, tag, description] of ENGINE_ROUTES) {
    const source = engine.paths[path]?.[method];
    if (!source) throw new Error(`engine spec has no ${method.toUpperCase()} ${path}`);
    const op = stripRepo(clone(source));
    const parameters = (op.parameters ?? []).filter((p) => p.in !== "header");
    parameters.push(VERSION_PARAMETER);
    if (method !== "get") parameters.push(IDEMPOTENCY_HEADER);
    const responses = Object.fromEntries(Object.entries(op.responses).filter(([status]) => status !== "default"));
    // The cloud answers an import with 201 Created.
    if (operationId === "import_timeline" && responses["200"]) { responses["201"] = responses["200"]; delete responses["200"]; }
    if (!op.requestBody && (operationId === "make_preview" || operationId === "make_transcript")) op.requestBody = PROJECT_HINT_BODY;
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
  for (const [path, item] of Object.entries({ ...EDITOR_PATHS, ...CLOUD_PATHS })) {
    const ops = clone(item);
    for (const op of Object.values(ops)) op.parameters = [...(op.parameters ?? []), VERSION_PARAMETER];
    paths[path] = { ...(paths[path] ?? {}), ...ops };
  }

  const sorted = Object.fromEntries(Object.keys(paths).sort().map((key) => [key, paths[key]]));
  const used = reachableSchemas({ paths: sorted, schemas });
  for (const name of Object.keys(schemas)) if (!used.has(name)) delete schemas[name];
  return {
    openapi: "3.1.0",
    info: {
      title: "VidJutsu Cloud API",
      version: API_VERSION,
      description: "Video editing built for agents: upload takes, edit a timeline with history, and render it on cloud machines. The same operations are MCP tools at https://api.vidjutsu.ai/mcp.",
    },
    servers: [{ url: "https://api.vidjutsu.ai" }],
    security: [{ bearer: [] }],
    tags: ["Sign-up and sign-in", "Account", "API keys", "Billing", "Media", "Uploads", "Projects", "History", "Shot list", "Layouts", "Audio", "Look and check", "Live updates", "Comments", "Renders", "Status"].map((name) => ({ name })),
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

/** Schemas reachable from the paths (plus Error), so engine-only schemas don't leak into the reference. */
function reachableSchemas({ paths, schemas }) {
  const seen = new Set(["Error"]);
  const walk = (node) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== "object") return;
    for (const [key, value] of Object.entries(node)) {
      if (key === "$ref" && typeof value === "string" && value.startsWith("#/components/schemas/")) {
        const name = value.slice("#/components/schemas/".length);
        if (!seen.has(name)) { seen.add(name); walk(schemas[name]); }
      } else walk(value);
    }
  };
  walk(paths);
  walk(schemas.Error);
  return seen;
}

export function renderSpec() {
  const engine = JSON.parse(readFileSync("openapi/engine.json", "utf8"));
  const text = `${JSON.stringify(buildSpec(engine), null, 2)}\n`;
  for (const pattern of BANNED_TEXT) {
    const found = text.match(new RegExp(`.{0,60}${pattern.source}.{0,40}`, pattern.flags));
    if (found) throw new Error(`the public spec must not contain ${pattern}: ...${found[0]}...`);
  }
  return text;
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
