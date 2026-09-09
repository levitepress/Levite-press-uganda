# Levite Press Uganda website

Static GitHub Pages website for Levite Press Uganda.

## Deployment
1. Replace the included `assets/logo.png` with the final Levite Press logo, keeping the same filename, or edit the image references consistently.
2. Upload the **contents** of this folder to the root of the GitHub Pages repository. Do not upload the parent folder itself.
3. GitHub Pages must publish from the branch/folder containing `index.html`.
4. If replacing an old repository, delete old website files that are no longer present before uploading this clean package. GitHub does not automatically delete old files just because they are absent from a new ZIP.

## Student resource centre
Run `SUPABASE_SETUP.sql`, create a public Storage bucket named `student-resources`, create an admin user in Supabase Auth, then place the public Supabase URL and anon key in `config.js`. The admin page is `admin/`. Never put a service_role key in this repository.

## Paths
All internal links use relative paths such as `services.html`, `assets/website.svg`, and `admin/`, so the extracted folder works from the repository root on GitHub Pages.
