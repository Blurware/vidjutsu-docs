import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const spec = JSON.parse(readFileSync("docs/openapi/spec.json", "utf8"));
const schemas = spec.components.schemas;
const cloneVideo = spec.paths["/v1/clones/video"].post;

assert.deepEqual(
  schemas.CloneVideoModel.enum,
  ["kling"],
  "CloneVideoModel must only accept kling",
);
assert.equal(
  schemas.CloneVideoRequest.properties.model.default,
  "kling",
  "CloneVideoRequest must default to kling",
);
assert.equal(
  "model" in schemas.CloneStartingImageRequest.properties,
  false,
  "CloneStartingImageRequest must not expose a model field",
);
assert.ok(
  cloneVideo.responses["202"],
  "POST /v1/clones/video must remain asynchronous and return 202",
);

const documentationFiles = [
  "apps/web/src/components/pricing.tsx",
  "docs/cli/clone.mdx",
  "docs/features.mdx",
  "docs/guides/clone-viral-videos.mdx",
  "docs/sdk/clone-starting-image.mdx",
  "docs/sdk/clone-video.mdx",
  "docs/openapi/spec.json",
];
const staleClaims = /seedance|audio[ -_]swap|480p|kling-motion-control/i;

for (const file of documentationFiles) {
  assert.doesNotMatch(
    readFileSync(file, "utf8"),
    staleClaims,
    `${file} contains a stale clone-video claim`,
  );
}

console.log("Clone documentation contract is current.");
