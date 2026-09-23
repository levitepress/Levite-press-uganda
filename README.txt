LEVITE PRESS UGANDA — NEW PORTAL STARTER

1. Extract this ZIP.
2. Upload/replace these files in the GitHub repository used for levitepress.online.
3. The frontend is already connected to the Supabase project:
   hpcbfitnzyfxpngxofoe
4. The browser key included in assets/supabase.js is the Supabase publishable key. Never replace it with a service-role/secret key.
5. In Supabase Authentication URL settings, add the final website origin (for example https://levitepress.online) to the allowed redirect/site URLs.
6. The exact original Levite Press logo asset was not retrievable from the public site in this build, so assets/logo.svg is a clean recreated approximation. Replace that SVG with the exact logo later if you provide the original logo file.
7. Student registration uses account_type=student only to choose the initial student/client profile. It cannot create an admin account.
8. Authenticated files use the private client-documents bucket and signed downloads.
9. admin.html is protected by the database role/RLS; the browser check is only a user-interface convenience.

IMPORTANT:
- GitHub Pages can host the static frontend.
- Authenticated workflows require internet access to Supabase.
- Do not commit any Supabase service_role or secret key.
