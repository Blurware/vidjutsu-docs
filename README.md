# vidjutsu-docs

VidJutsu documentation site, built with [Mintlify](https://mintlify.com).

## OpenAPI Spec

The API reference is generated from the OpenAPI spec hosted at:

```
https://raw.githubusercontent.com/tfcbot/vidjutsu-openapi/main/openapi/spec.json
```

Source repo: [tfcbot/vidjutsu-openapi](https://github.com/tfcbot/vidjutsu-openapi)

The `docs.json` config references this URL directly via the `openapi` field on the
API Reference tab. There is no local copy of the spec in this repo.

**Note:** Changes to the remote spec do not trigger automatic Mintlify redeployments.
To redeploy after a spec update, call the
[Mintlify Trigger Deployment API](https://mintlify.com/docs/api-playground/openapi-setup)
or push any commit to this repo.

## Development

```bash
bun install
bun run dev
```
