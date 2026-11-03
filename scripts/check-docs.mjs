import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { existsSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { renderSpec } from "./build-spec.mjs";

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
  [/vcore/i, "internal engine name"],
  [/\/v1\//, "old /v1 API route"],
  [/\/v3\b/, "versioned path (the API is versioned by date, with no version in paths)"],
  [/\bclon(e|es|ing)\b/i, "old clone product"],
  [/\bscrap(e|es|ing)\b/i, "old scrape product"],
  [/\bcharacters?\b/i, "old characters product"],
  [/\$99\b/, "old $99 plan"],
  [/\$25 ?(a|\/) ?mo/i, "old $25 monthly plan (billing is a prepaid wallet)"],
  [/(?<!no )\bsubscri(be|bes|bed|bing|ption|ptions)\b/i, "old subscription billing (billing is a prepaid wallet)"],
  [/portal_url|included each month|60 minutes/i, "old Pro plan details"],
  [/free,? (native )?mac (app|editor)|app itself is free|editor, free|\["free"/i, "the editor isn't free: it needs a VidJutsu Cloud account"],
  [/credits-and-billing|get-api-key/, "removed page"],
];

for (const [file, text] of contents) {
  for (const [pattern, label] of forbidden) {
    assert.doesNotMatch(text, pattern, `${file} contains ${label}`);
  }
}

assert.match(contents.get("docs/pricing.mdx"), /no monthly fee/i, "pricing must say there is no monthly fee");
assert.match(contents.get("docs/pricing.mdx"), /at least \$5/, "pricing must state the $5 first payment");
assert.match(contents.get("docs/pricing.mdx"), /\$0\.03 per vCPU-minute/, "pricing must state the box-time rate");
assert.match(contents.get("docs/pricing.mdx"), /no free plan/i, "pricing must say there is no free plan");

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
assert.equal(specText, renderSpec(), "docs/openapi/spec.json is stale: run node scripts/build-spec.mjs");

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
for (const tab of config.navigation.tabs) {
  for (const group of tab.groups) {
    for (const page of group.pages) {
      if (/^(GET|POST|PUT|DELETE|PATCH) /.test(page)) {
        const [method, path] = page.split(" ");
        assert.ok(spec.paths[path]?.[method.toLowerCase()], `API navigation lists ${page}, which the spec doesn't have`);
      } else {
        assert.ok(existsSync(`docs/${page}.mdx`) || existsSync(`docs/${page}.md`), `navigation lists missing page ${page}`);
      }
    }
  }
}
for (const { source, destination } of config.redirects ?? []) {
  assert.ok(!pageByRoute.has(source), `redirect from ${source} shadows an existing page`);
  assert.ok(pageByRoute.has(destination), `redirect from ${source} goes to missing page ${destination}`);
}
for (const [path, item] of Object.entries(spec.paths)) {
  for (const method of ["get", "post", "put", "delete", "patch"]) {
    if (item[method]) assert.ok(navOperations.has(`${method.toUpperCase()} ${path}`), `API navigation omits ${method.toUpperCase()} ${path}`);
  }
}

console.log(`Documentation checks passed for ${contentFiles.length} content files.`);
