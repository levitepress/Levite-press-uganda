# Levite Press V14 — Finalization Notes

This build is the final site cleanup pass based on the uploaded V8 package.

## Completed
- Consolidated public services remain five clear categories.
- Public SEO pages retain canonical URLs and sitemap coverage.
- Legacy overlapping service URLs remain noindex redirect pages.
- Future Tools is a public roadmap page, not an advertised live tool.
- Application form now validates and uploads the applicant photo to the private Supabase `student-photos` bucket before saving the application.
- Application photo guidance is explicitly Uganda-focused: recent, clear, full-face passport-style photograph on a plain white/light background. No unsupported exact pixel/dimension claim is made.
- JPG, PNG and WebP are accepted; client-side maximum is 5 MB.
- Application form now includes privacy consent.
- Student Portal is clearly marked inactive instead of presenting a fake password login.
- `robots.txt` no longer blocks the public Future Tools roadmap while the sitemap lists it.
- Social sharing metadata is consistent on indexable pages.
- Supabase setup SQL is included in `supabase/schema.sql`.

## Supabase deployment step
Run `supabase/schema.sql` in the Supabase SQL Editor for the project configured in `app.js`. The website cannot execute that administrative database step automatically.

## Important security model
The public website uses only the publishable Supabase key. Public applicants can insert applications and upload an application photo, but application records are not publicly readable. Staff access is intended to be granted through `public.staff_members` and authenticated Supabase users.
