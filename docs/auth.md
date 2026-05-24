# VidJutsu Agent Auth (auth.md)

This document is the canonical, agent-readable manifest for registering with the VidJutsu API. It follows the [auth.md protocol](https://github.com/workos/auth.md) so any agent that speaks auth.md can self-onboard without a human in the loop.

VidJutsu implements the **User-Claimed** flow from auth.md ([flow reference](https://workos.com/auth-md/docs/flows/claimed)): the agent and the user run the entire OTP ceremony directly with VidJutsu — no agent provider participates in the handshake. This is the simplest, lowest-friction path and works for any agent regardless of which model or runtime is hosting it.

## Resource

- **Resource URL:** `https://api.vidjutsu.ai`
- **Authorization server:** `https://api.vidjutsu.ai` (we issue our own bearer keys)
- **Manifest URL:** `https://docs.vidjutsu.ai/auth.md`

## Discovery

Two protocol-mandated `.well-known` endpoints describe the auth surface.

### Step 1a — Protected Resource Metadata

```
GET https://api.vidjutsu.ai/.well-known/oauth-protected-resource
```

Returns:

```json
{
  "resource": "https://api.vidjutsu.ai",
  "authorization_servers": ["https://api.vidjutsu.ai"],
  "bearer_methods_supported": ["header"],
  "resource_documentation": "https://docs.vidjutsu.ai/auth.md"
}
```

### Step 1b — Authorization Server Metadata

```
GET https://api.vidjutsu.ai/.well-known/oauth-authorization-server
```

Returns the standard AS metadata plus an `agent_auth` block specific to auth.md:

```json
{
  "issuer": "https://api.vidjutsu.ai",
  "token_endpoint": "https://api.vidjutsu.ai/v1/auth/agent",
  "revocation_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/revoke",
  "agent_auth": {
    "manifest_url": "https://docs.vidjutsu.ai/auth.md",
    "registration_endpoint": "https://api.vidjutsu.ai/v1/auth/agent",
    "identity_types_supported": ["anonymous", "verified_email"],
    "assertion_types_supported": ["verified_email"],
    "claim_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/claim",
    "claim_complete_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/claim/complete",
    "revocation_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/revoke"
  }
}
```

## Identity types

Two entrypoints, both run end-to-end by the agent and the user — no agent-provider participation required.

| Flow | When to use | Credential at signup? |
|------|-------------|------------------------|
| [anonymous](#1-anonymous) | The agent wants a usable key immediately and the user will verify their email later. | Yes (pre-claim scopes). |
| [verified_email](#2-verified_email) | The agent already has the user's email and wants to gate the credential behind OTP verification. | No — only a `claim_token`. |

Both flows converge at the same [claim flow](#claim-flow), which exchanges a `claim_token` + OTP for a fully-scoped, freshly-minted API key.

---

### 1. anonymous

Immediate API key with pre-claim scopes (`api.read`). The agent can call read-only endpoints right away, and the returned `claim_token` can be redeemed later to upgrade to a fully-scoped key once the user verifies an email.

```http
POST /v1/auth/agent
Content-Type: application/json

{ "type": "anonymous", "requested_credential_type": "api_key" }
```

Response:

```json
{
  "registration_id": "rgn_…",
  "registration_type": "anonymous",
  "credential_type": "api_key",
  "credential": "vj_anon_…",
  "credential_expires": null,
  "scopes": ["api.read"],
  "post_claim_scopes": ["api.read", "api.write"],
  "claim_url": "https://api.vidjutsu.ai/v1/auth/agent/claim?token=clm_…",
  "claim_token": "clm_…",
  "claim_token_expires": 1779600000000
}
```

To upgrade this credential to full scopes, run the [claim flow](#claim-flow) with the returned `claim_token`.

### 2. verified_email

The agent asserts an email on behalf of the principal. VidJutsu emails a 6-digit OTP to that address and returns a `claim_token`. No credential is issued at this step — the agent must complete the OTP via [claim/complete](#claim-flow) to receive the key.

```http
POST /v1/auth/agent
Content-Type: application/json

{
  "type": "identity_assertion",
  "assertion_type": "verified_email",
  "assertion": "agent-user@example.com"
}
```

Response:

```json
{
  "registration_id": "rgn_…",
  "registration_type": "email-verification",
  "post_claim_scopes": ["api.read", "api.write"],
  "claim_url": "https://api.vidjutsu.ai/v1/auth/agent/claim?token=clm_…",
  "claim_token": "clm_…",
  "claim_token_expires": 1779600000000
}
```

## Claim flow

Run the same two-call ceremony to finish either flow.

### 1. Initiate claim (anonymous only — `verified_email` already kicks off OTP)

```http
POST /v1/auth/agent/claim
Content-Type: application/json

{ "claim_token": "clm_…", "email": "agent-user@example.com" }
```

Response:

```json
{
  "registration_id": "rgn_…",
  "claim_attempt_id": "cla_…",
  "status": "initiated",
  "expires_at": 1779600000000
}
```

### 2. Complete claim (submit OTP)

```http
POST /v1/auth/agent/claim/complete
Content-Type: application/json

{ "claim_token": "clm_…", "code": "123456" }
```

Response:

```json
{
  "credential": "vj_live_…",
  "credential_type": "api_key",
  "credential_expires": null,
  "scopes": ["api.read", "api.write"]
}
```

> **Key rotation on claim.** For anonymous registrations, the pre-claim `vj_anon_*` key returned at signup is **invalidated server-side** as soon as the claim succeeds. The freshly-returned `vj_live_*` key is the only valid credential going forward — agents MUST swap to the new value. This is a hygiene measure consistent with the auth.md spec's guidance on User-Claimed credential lifecycles.

## Using the credential

Send it as a standard bearer token on every authenticated request:

```http
Authorization: Bearer vj_live_…
```

API calls deduct from the client's credit balance and respond with `HTTP 402 Payment Required` plus `WWW-Authenticate: Payment` when the balance is exhausted. See `credits-and-billing` in the Guides tab for the credit + top-up surface.

## Revocation

The protocol reserves a logout-JWT push endpoint for future provider-driven revocation:

```http
POST /v1/auth/agent/revoke
Content-Type: application/logout+jwt

<signed logout+jwt>
```

Response:

```json
{ "revoked": true }
```

> The user-claimed flow has no provider in the loop, so this endpoint is a no-op receiver today. It is kept for protocol surface-area.

## Errors

All errors follow `application/problem+json` (RFC 7807). Notable cases:

- `400 Bad Request` — unsupported `type` or `assertion_type`, missing fields.
- `404 Not Found` — claim_token unknown or expired.
- `401 Unauthorized` — invalid or expired OTP on claim/complete.
- `402 Payment Required` — returned on metered API calls after successful registration when the credit balance is empty.

## Notes on this manifest

- This document is served raw at `https://docs.vidjutsu.ai/auth.md` so any auth.md-aware agent can fetch and parse it without HTML scraping.
- Spec source: see `Agent` tag in the [API Reference](/api-reference/introduction) for the machine-readable OpenAPI version of the same endpoints.
- The `.well-known` discovery routes are hand-registered and not part of the OpenAPI spec.
