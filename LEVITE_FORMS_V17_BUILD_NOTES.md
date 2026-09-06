# Levite Press V17 — Online Forms / Private Email Gateway

This build introduces a professional online submission layer for major service requests and online study applications.

## Design
- Customers see forms, not the internal business email address.
- Forms accept structured details and attachments.
- Each submission is intended to generate an internal reference and notification.
- Automatic Levite Tools remain browser-first and do not require cloud storage.
- No cloud backend connection is added in V17.

## Important deployment step
The static website needs a private form receiver to actually deliver submissions. `LEVITE_FORMS_GOOGLE_APPS_SCRIPT.gs` is included as a ready backend option. Deploy it as a Google Apps Script Web App, set `NOTIFY_EMAIL` to the internal business mailbox, then place the deployed Web App URL in `form-gateway.js` as `window.LEVITE_FORM_ENDPOINT`.

Do not put the business email address in the public HTML or JavaScript.

The form gateway should be reviewed for attachment-size limits and retention/security settings before production use. Until the endpoint is configured, forms display a configuration message rather than pretending the request was delivered.
