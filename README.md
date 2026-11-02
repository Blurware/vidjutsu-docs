# vidjutsu-docs

The VidJutsu Cloud documentation (`docs/`, [Mintlify](https://mintlify.com), served at docs.vidjutsu.ai) and the vidjutsu.ai site (`apps/web`, Next.js on Vercel).

## API reference

`docs/openapi/spec.json` is the public API spec for `https://api.vidjutsu.ai/v3`. Don't edit it by hand: it is built by `scripts/build-spec.mjs` from

- `openapi/engine.json`, a copy of the engine's spec (`docs/openapi.json` in tfcbot/vidjutsu-core), for the media, upload, project, audio and render routes; and
- the account, sign-in, key and billing routes the cloud gateway adds (tfcbot/vidjutsu `gateway/lib/operations.ts`), written in the script.

When either changes, copy the new engine spec to `openapi/engine.json` and/or update the script, then:

```bash
node scripts/build-spec.mjs
```

## Develop

```bash
bun install
bun run dev          # the site
cd docs && npx mint dev   # the docs
bun run check        # spec is current, docs links and navigation, banned terms
bun run build        # the site
```

CI (`.github/workflows/check.yml`) runs the checks, the Mintlify build and link check, and the site build.
