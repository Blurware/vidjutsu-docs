import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

function filesUnder(root, extensions) {
  const files = [];
  for (const entry of readdirSync(root)) {
    const path = join(root, entry);
    if (statSync(path).isDirectory()) files.push(...filesUnder(path, extensions));
    else if (extensions.has(extname(path))) files.push(path);
  }
  return files;
}

const contentFiles = [
  ...filesUnder("docs", new Set([".md", ".mdx"])),
  ...filesUnder("apps/web/src", new Set([".tsx"])),
];
const contents = new Map(contentFiles.map((file) => [file, readFileSync(file, "utf8")]));

const forbidden = [
  [/seedance/i, "Seedance clone claim"],
  [/wavespeed/i, "WaveSpeed provider claim"],
  [/480p/i, "legacy 480p claim"],
  [/kling-motion-control/i, "legacy model literal"],
  [/characterImageUrl/, "legacy starting-image field"],
  [/about 2 minutes/i, "legacy clone-check duration"],
  [/mediaJobs|getDistributionJob|getJob/, "removed job API"],
  [/--video-url/, "stale generated CLI flag"],
  [/facebook-ads/, "stale compliance platform"],
];

for (const [file, text] of contents) {
  for (const [pattern, label] of forbidden) {
    assert.doesNotMatch(text, pattern, `${file} contains ${label}`);
  }
}

for (const file of [
  "docs/cli/clone.mdx",
  "docs/guides/clone-viral-videos.mdx",
  "docs/sdk/clone-starting-image.mdx",
]) {
  const text = contents.get(file);
  assert.match(text, /firstFrame|--first-frame/, `${file} must document the extracted first frame`);
  assert.match(text, /characterId|--character/, `${file} must document a stored character id`);
}

assert.doesNotMatch(contents.get("docs/credits-and-billing.mdx"), /POST \/v1\/(upload|posts).*\|\s*(100|200)/, "upload and posts must not be documented as metered");
assert.match(contents.get("docs/cli/install.mdx"), /1\.4\.0/, "bundled CLI release must be documented");
assert.match(contents.get("docs/cli/install.mdx"), /0\.6\.0/, "standalone CLI release must be documented");

const docsFiles = [...contents.keys()].filter((file) => /\.mdx?$/.test(file));
const pageByRoute = new Map();
for (const file of docsFiles) {
  const route = `/${relative("docs", file).replace(/\.(md|mdx)$/, "")}`;
  pageByRoute.set(route, file);
}
pageByRoute.set("/", "docs/index.mdx");
pageByRoute.set("/index", "docs/index.mdx");

const slug = (heading) => heading
  .toLowerCase()
  .replace(/[`*_]/g, "")
  .replace(/&/g, "and")
  .replace(/[^a-z0-9 -]/g, "")
  .trim()
  .replace(/\s+/g, "-");

for (const [file, text] of contents) {
  if (!/\.mdx?$/.test(file)) continue;
  for (const match of text.matchAll(/(?:href=["']|\]\()([^"')\s]+)(?:["']|\))/g)) {
    const target = match[1];
    if (!target.startsWith("/")) continue;
    const [route, anchor] = target.split("#");
    const targetFile = pageByRoute.get(route || `/${relative("docs", file).replace(/\.(md|mdx)$/, "")}`);
    assert.ok(targetFile, `${file} links to missing page ${target}`);
    if (anchor) {
      const targetText = readFileSync(targetFile, "utf8");
      const anchors = new Set([...targetText.matchAll(/^#{1,6}\s+(.+)$/gm)].map((item) => slug(item[1])));
      assert.ok(anchors.has(anchor), `${file} links to missing anchor ${target}`);
    }
  }
}

const specText = readFileSync("docs/openapi/spec.json", "utf8");
const expectedHash = readFileSync(".openapi-sha256", "utf8").trim();
const actualHash = createHash("sha256").update(specText).digest("hex");
assert.equal(actualHash, expectedHash, "vendored OpenAPI snapshot hash does not match .openapi-sha256");

const spec = JSON.parse(specText);
const config = JSON.parse(readFileSync("docs/docs.json", "utf8"));
const navOperations = new Set();
for (const tab of config.navigation.tabs) {
  for (const group of tab.groups) {
    for (const page of group.pages) {
      if (/^(GET|POST|PUT|DELETE|PATCH) /.test(page)) navOperations.add(page);
    }
  }
}
for (const [path, item] of Object.entries(spec.paths)) {
  for (const method of ["get", "post", "put", "delete", "patch"]) {
    if (item[method]) assert.ok(navOperations.has(`${method.toUpperCase()} ${path}`), `API navigation omits ${method.toUpperCase()} ${path}`);
  }
}

console.log(`Documentation checks passed for ${contentFiles.length} content files.`);
