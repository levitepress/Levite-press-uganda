# Levite Press V25 — Embedded Google Sign-In + Payment Flow

## Implemented
- Official Google Identity Services client loader and Sign in with Google rendering on My Account.
- Public configuration file `levite-config.js` for the Google OAuth Web Client ID.
- Browser session display/sign-out after Google returns an ID token.
- No Google password, client secret, Drive, Gmail, Contacts or Photos scope is requested.
- Airtel Money payment flow now creates an order reference, shows the amount and merchant 7128744, offers copyable payment details, opens Airtel's *185*9# merchant payment flow, and provides a WhatsApp payment-completed handoff.
- Payment PIN is never collected by Levite Press.

## External values still required for true production verification
- Google OAuth Web Client ID for the `levitepress.online` web origin. This cannot be invented safely; it must be created in the owner's Google Cloud project.
- A server-side endpoint should verify the Google ID token before granting protected server/customer data access. The static package therefore does not pretend local browser state is a secure server session.
- MTN merchant/API credential is still required before MTN payment can be activated or automatically verified. The package deliberately does not invent a merchant code.
- Airtel automatic payment verification likewise requires an approved merchant/API integration; the browser can initiate the official USSD flow but cannot read the user's Airtel PIN or independently confirm the transaction.
