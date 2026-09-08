# Levite Press Uganda Website

A responsive website starter for Levite Press Uganda, branded with the supplied logo.

## Included
- Professional homepage with animated/hover interactions, service cards and responsive navigation.
- Website design, printing/design, online computer lessons and digital resource portal sections.
- WhatsApp and email contact actions.
- Masooli/Wakiso Google Maps embed.
- Privacy Policy and Terms of Service pages written for the stated Uganda context.
- SEO metadata, Open Graph metadata, canonical URL, robots.txt, sitemap.xml and Local/ProfessionalService structured data.
- Admin portal using Supabase Auth + Storage for publishing downloadable resources.
- Supabase SQL schema and policies in `docs/supabase.sql`.
- Supplied Levite Press logo converted to `assets/levite-press-logo.jpg`.
- Four custom SVG illustrations created for the website.

## Connect the live file upload/download portal
1. Create/use your Supabase project.
2. In Supabase SQL Editor, run `docs/supabase.sql`.
3. Create an administrator user in Supabase Authentication.
4. Open `config.js` and add ONLY the Supabase project URL and the public anon/publishable key.
5. Do not add the Supabase service-role key to this website.
6. Deploy the folder to your hosting and open `/admin/` to sign in and upload resources.

## Important security note
The starter storage policy allows any authenticated user to insert a resource. For a production deployment, restrict insert/update/delete operations to a dedicated admin role/profile before opening the admin portal to anyone else.

## Deployment
Upload the contents of this folder to your web host. If your domain is `levitepress.online`, the included canonical URL, robots.txt and sitemap already point to it.

## Legal note
The privacy and terms pages are practical website templates, not legal advice. They reference Uganda's Data Protection and Privacy Act 2019 / Regulations 2021 and electronic transaction framework, but actual compliance depends on your real data processing, contracts, hosting, registration and business operations.
