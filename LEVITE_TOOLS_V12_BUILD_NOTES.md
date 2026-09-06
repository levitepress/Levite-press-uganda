# Levite Tools V12 – Stage 1

This release adds the first customer-facing Levite Tools workspace while keeping the existing site intact.

## Included
- `levite-tools.html` customer workspace
- Service buttons: Scan/OCR, Type, Design, Compress, Convert, Merge/Split
- File selection and preview list
- Standard / Fast / Urgent service levels
- Indicative UGX starting price calculation
- Free-sample request flow (prototype)
- Professional-service request flow (prototype)
- Local order reference generation
- Updated Levite Tools roadmap links
- Existing public contact email remains `levitepressug@gmail.com`

## Important
This stage intentionally does not claim that production OCR, document conversion, compression, payment processing or secure document storage are live. Those require a backend processing layer, secure storage, order tables, payment integration and server-side controls.

## Next backend stage
1. cloud backend tables: tool_orders, tool_files, tool_samples, tool_payments.
2. cloud backend Storage bucket with RLS policies.
3. Server/Edge Functions for processing and signed downloads.
4. OCR/conversion/compression engines.
5. Uganda payment gateway integration.
6. Client order dashboard and admin workflow.
