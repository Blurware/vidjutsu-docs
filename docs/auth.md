# VidJutsu Agent Auth (auth.md)

This document is the canonical, agent-readable manifest for registering with the VidJutsu API. It follows the [auth.md protocol](https://github.com/workos/auth.md) so any agent that speaks auth.md can self-onboard without a human in the loop.

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
    "identity_types_supported": [
      "anonymous",
      "verified_email",
      "urn:ietf:params:oauth:token-type:id-jag"
    ],
    "trusted_assertion_issuers": ["anthropic.com"],
    "claim_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/claim",
    "claim_complete_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/claim/complete",
    "revocation_endpoint": "https://api.vidjutsu.ai/v1/auth/agent/revoke"
  }
}
```

## Identity types

Pick the path that matches the agent's identity context.

### Decision tree

1. **Does the agent provider issue a signed ID-JAG bound to a verified email?** → use [identity_assertion / id-jag](#3-identity_assertion--id-jag).
2. **Do you have a verified email for the principal but no signed assertion?** → use [identity_assertion / verified_email](#2-identity_assertion--verified_email) (kicks off OTP).
3. **Neither?** → use [anonymous](#1-anonymous) (immediate key, claimable later).

---

### 1. anonymous

Immediate API key with pre-claim scopes (`api.read`). The agent can call read-only endpoints right away, and the returned `claim_token` can be redeemed later to upgrade to a verified identity.

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

### 2. identity_assertion / verified_email

The agent asserts an email on behalf of the principal. VidJutsu emails a 6-digit OTP to that address and returns a `claim_token`. Complete the OTP via [claim_complete](#claim-flow) to receive the credential.

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

No credential is issued at this step. The agent must complete the OTP via `claim/complete`.

### 3. identity_assertion / id-jag

The agent passes a signed identity-assertion JWT (ID-JAG, [token-type URN](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-identity-chaining)) issued by a trusted assertion provider. VidJutsu validates the signature against the issuer's JWKS, enforces `email_verified=true`, checks `aud`/`exp`, and rejects replays.

```http
POST /v1/auth/agent
Content-Type: application/json

{
  "type": "identity_assertion",
  "assertion_type": "urn:ietf:params:oauth:token-type:id-jag",
  "assertion": "<JAG signed JWT>"
}
```

Response (immediate credential, no claim flow needed):

```json
{
  "registration_id": "rgn_…",
  "registration_type": "agentic",
  "credential_type": "api_key",
  "credential": "vj_live_…",
  "credential_expires": null,
  "scopes": ["api.read", "api.write"]
}
```

**Trusted issuers** are advertised in the `agent_auth.trusted_assertion_issuers` discovery field. Current trust list: `anthropic.com`.

The JAG payload must include: `iss`, `sub`, `aud` (matching the resource URL), `exp`, `jti` (for replay protection), `email`, and `email_verified: true`. The header must carry a `kid` that resolves in the issuer's JWKS.

## Claim flow

For the `anonymous` and `verified_email` flows, complete the registration with two calls.

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

The credential replaces any pre-claim key issued in the anonymous flow.

## Using the credential

Send it as a standard bearer token on every authenticated request:

```http
Authorization: Bearer vj_live_…
```

API calls deduct from the client's credit balance and respond with `HTTP 402 Payment Required` plus `WWW-Authenticate: Payment` when the balance is exhausted. See `credits-and-billing` in the Guides tab for the credit + top-up surface.

## Revocation

Providers may push a logout JWT (RFC 8417 SET) to revoke a credential:

```http
POST /v1/auth/agent/revoke
Content-Type: application/logout+jwt

<signed logout+jwt>
```

Response:

```json
{ "revoked": true }
```

> The receiver is in place as of this release. Provider-side verification (validating the SET against the provider's JWKS) lands in a follow-up release; today the endpoint accepts and logs the SET and returns 200.

## Errors

All errors follow `application/problem+json` (RFC 7807). Notable cases:

- `400 Bad Request` — unsupported `type` or `assertion_type`, missing fields.
- `401 Unauthorized` — ID-JAG verification failed (untrusted issuer, bad signature, expired, replayed, `email_verified` false, wrong `aud`, missing claims).
- `404 Not Found` — claim_token unknown or expired.
- `402 Payment Required` — returned on metered API calls after successful registration when the credit balance is empty.

## Notes on this manifest

- This document is served raw at `https://docs.vidjutsu.ai/auth.md` so any auth.md-aware agent can fetch and parse it without HTML scraping.
- Spec source: see `Agent` tag in the [API Reference](/api-reference/introduction) for the machine-readable OpenAPI version of the same endpoints.
- The `.well-known` discovery routes are hand-registered and not part of the OpenAPI spec.
