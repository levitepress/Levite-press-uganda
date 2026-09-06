# Levite Tools V15

V15 continues from V14 and fixes the Merge / Split workflow.

## Added
- Merge / Split now behaves correctly: select 2 or more PDFs to merge; select exactly 1 PDF to split it into individual page PDFs.
- Updated the tool card wording so the behaviour is clear to customers.
- Kept the existing browser-side compression, image-to-PDF conversion and quick OCR sample.
- Kept the cloud backend backend schema as a separate deployment stage; no service-role key is exposed in browser code.

## Backend stage still required
1. Run `LEVITE_TOOLS_V14_BACKEND_SCHEMA.sql` in the correct cloud backend project.
2. Create a private Storage bucket for customer files.
3. Decide the customer authentication/guest-order model and add RLS policies.
4. Connect secure uploads and order creation.
5. Add Uganda payment gateway integration.
6. Expand the admin dashboard for order review, file access, status changes and delivery.

The live website may still describe Levite Tools as coming soon until this production backend and customer workflow are deployed.
