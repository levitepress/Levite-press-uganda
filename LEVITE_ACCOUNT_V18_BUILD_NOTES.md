# Levite Press V18 — One Google Account / Minimal Identity

V18 establishes the architecture for a single Levite Press customer workspace based on Sign in with Google, without activating production authentication or connecting cloud backend.

## Core principle
- Public browsing does not require an account.
- Automatic Levite Tools remain local-first and do not need a customer account.
- Professional services can require Google sign-in before submitting a major request.
- Google authenticates the account; Levite Press keeps a minimal customer record.
- The Google `sub` claim is the permanent external account identifier. Do not use email as the database primary identifier.
- Never accept a browser-supplied `sub` as proof. A server must verify the Google ID token first.
- Do not request Google Drive/Gmail/Contacts/Photos scopes merely for sign-in.

## Planned account record
- Levite customer UUID
- Google `sub`
- account status
- first seen / last seen timestamps
- references to professional service requests

## Not automatically collected
- Google password
- government ID
- Google Drive files
- Gmail contents
- contacts
- photos
- unnecessary profile data

## Next production steps (after approval)
1. Create Google OAuth / Google Identity Services web client for `levitepress.online`.
2. Configure an HTTPS server-side token verification endpoint.
3. Verify issuer, audience, signature, expiry and CSRF/nonce protections as appropriate.
4. Create the customer record from the verified `sub`.
5. Issue a secure application session; do not use the Google ID token as the site's long-term session token.
6. Connect the approved database/auth layer and create least-privilege RLS policies.
7. Add professional request and attachment workflows.
8. Add account deletion/data-request controls and retention rules.
