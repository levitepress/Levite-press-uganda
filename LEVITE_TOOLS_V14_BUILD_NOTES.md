# Levite Tools V14

## Implemented now
- Mobile-friendly Levite Tools workspace.
- Browser-side image compression.
- Image to PDF conversion.
- PDF merge.
- Quick OCR sample for images using Tesseract.js.
- Free-sample messaging for professional typing/design jobs.
- Standard/Fast/Urgent price estimation in UGX.
- Order reference and payment-status capture locally.
- Existing site email remains `levitepressug@gmail.com` to match the live site.

## Backend next
1. Run `LEVITE_TOOLS_V14_BACKEND_SCHEMA.sql` in the project's cloud backend SQL editor.
2. Create a private storage bucket for tool uploads.
3. Add cloud backend Auth if customer accounts are required.
4. Add RLS policies based on authenticated user ownership/admin role.
5. Connect browser uploads to Storage and order creation to `tool_orders`.
6. Add payment gateway after confirming the preferred Uganda payment provider and merchant details.
7. Add admin order/file/status controls.
8. Add server-side PDF/Word conversion and PDF compression where browser processing is insufficient.
