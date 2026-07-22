# vidjutsu-docs

VidJutsu documentation site, built with [Mintlify](https://mintlify.com).

## OpenAPI Spec

The API reference uses the vendored snapshot at `docs/openapi/spec.json`. Its authoritative source is:

```
https://raw.githubusercontent.com/tfcbot/vidjutsu-openapi/main/openapi/spec.json
```

Source repo: [tfcbot/vidjutsu-openapi](https://github.com/tfcbot/vidjutsu-openapi)

`docs/docs.json` references the local snapshot. `.openapi-sha256` records its expected digest, and `bun run check:docs` verifies the snapshot and documentation contracts.

The OpenAPI repository dispatches `.github/workflows/sync-spec.yml`, which downloads the latest snapshot, updates its digest, validates the docs, and commits changes. That commit triggers the normal Mintlify deployment. The workflow can also be run manually.

## Development

```bash
bun install
bun run dev
bun run check
bun run build
```
