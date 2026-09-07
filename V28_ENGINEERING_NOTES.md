# Levite Press V28 — Automatic Tools Engineering Pass

## Purpose
This pass consolidates the automatic-tool fixes instead of making another partial patch.

## Automatic tools now covered
- Scan / OCR: image OCR + PDF OCR (PDF pages are rendered in-browser, then OCR runs locally).
- Compress: image compression with selectable target sizes (100 KB, 250 KB, 500 KB, 1 MB, 2 MB) and verification that the output is at or below the selected target when technically possible.
- Compress PDF: local PDF optimization remains available; it is **not** advertised as a guaranteed target-size compressor.
- Convert: JPG/JPEG, PNG and browser-decodable formats such as WebP are converted to one PDF locally.
- Merge: multiple PDFs into one PDF locally.
- Split: one PDF into individual page PDFs locally.
- Save/preview: finished files get Save controls and PDF preview.

## Reliability changes
- PDF, PDF-rendering and OCR engines load only when a feature needs them, so the tools page does not pay the startup cost for unused engines.
- Multiple CDN fallbacks are defined for the browser libraries.
- Clear failure messages are shown instead of silently doing nothing.
- PDF OCR reuses one OCR worker across pages rather than creating a new worker for every page.

## Privacy
Automatic-tool files are processed in the browser. The site does not intentionally upload them for processing or store them in cloud storage.

## Important certification boundary
This build has been syntax-checked and statically audited in the build environment. The build environment could not resolve the external browser-library CDNs, and its headless browser test timed out, so a full live-browser runtime certification of PDF/OCR/merge/split cannot honestly be claimed from this environment. The production browser must be able to load the pinned libraries. The code includes fallbacks and user-visible errors for failure cases.

## Payment/auth boundary
V25 authentication/payment behavior is retained. Google client ID and MTN merchant/API credentials are still configuration items; no fake credentials are added. Airtel merchant 7128744 remains the configured merchant reference, with PIN entry staying inside Airtel's own payment flow.
