# Levite Press V27 — Live Flow / Speed Repair

This build is based on V25/V26 and keeps the existing functionality while fixing the two main deployment problems found during review.

## Repairs
- Hero class image is now a local WebP asset, preloaded and explicitly sized.
- Mobile hero uses a responsive single-column layout so the class image cannot be pushed off-screen.
- Removed the unused 1.7 MB class image and old PNG hero copy to reduce package size.
- Optimized the visible logo to a small WebP asset.
- Levite Tools no longer loads PDFLib and Tesseract on every tools-page visit. They load only when a PDF/OCR operation actually needs them, improving initial speed.
- PDF/OCR loading failures now show a direct user-facing error instead of silently leaving the Run button non-functional.
- Scan accepts image/photo input only, matching the current quick OCR implementation.
- Added the missing `printing-graphics-typesetting.html` page referenced by the homepage START HERE card.
- Kept Google Sign-In, Airtel payment flow, WhatsApp fallback, local processing and V25 workflow.

## Important deployment note
The public `levitepress.online` crawl previously returned the older site with "Levite Tools — Coming Soon". This package must be uploaded as the new site before these changes can appear publicly.

## External dependencies
PDF operations and OCR still load their engines from their official CDN locations only when required. Image compression and the rest of the static site do not wait for those engines.
