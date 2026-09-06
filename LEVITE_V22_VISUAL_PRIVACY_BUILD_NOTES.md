# Levite Press V22 — Visual + Privacy-First Build

## Added
- Professional local SVG illustrations for the homepage and Levite Tools.
- Hover/focus motion on service cards, tool cards, process cards, buttons and visual panels.
- Responsive visual sections and pricing cards.
- Privacy badge and stronger local-processing presentation.
- Levite Tools pricing cards: UGX 500/page for Scan/OCR, Compress, Convert, Merge/Split; UGX 200/page AI Typing; UGX 3,000/job AI Graphics/Design.
- Finished-file Share action where the device/browser supports Web Share API; Save/Download remains available.
- Professional-request button now routes to the website request form instead of exposing a public mailto address.
- MTN remains pending; Airtel merchant 7128744 remains displayed in the payment step.

## Privacy architecture
- No Supabase URL, key, client SDK or SQL schema in the active package.
- Automatic document tools remain browser-first where supported.
- Professional submissions use the separate website form gateway architecture; the receiving endpoint remains intentionally unconfigured until the private receiving service is deployed.

## Important payment note
Airtel's official merchant-pay flow uses *185*9# and then the merchant ID, amount/reference and PIN. The website must never collect the Mobile Money PIN. Full automated payment confirmation should only be activated after the official merchant/API mechanism is configured.
