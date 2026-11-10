# Bikila Biru — Personal Website

A responsive personal website preview with a home page, editable placeholder biography, journal cards, contact form presentation, and an admin entry point. This repository currently contains a static HTML/CSS/JavaScript implementation.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. No build step is required.

## Customize

- Replace the editable biography and journal sample entries in `index.html` and `app.js`.
- Replace `hello@example.com` with the preferred public contact address.
- Replace the abstract profile image placeholder with an approved profile photo.
- Adjust the palette and typography in `styles.css`.

## Current scope and limitations

This is a frontend preview, not the production full-stack system described in the original brief. The contact form currently displays a local confirmation and does not send or save messages. The admin dialog is intentionally disabled; there is no authentication, dashboard, post editor, database, uploads, server-side validation, or rate limiting. Journal cards are editable sample content, not database-backed posts. Do not use this preview to collect sensitive information or deploy it as a production site.

The project environment did not have Node.js or npm available, so a Next.js/PostgreSQL application could not be installed or build-verified here. To deliver the full requested system, the next implementation stage needs a Node.js environment and a PostgreSQL connection, then should add server-side authentication, Prisma models/migrations, protected admin routes, server-persisted contact submissions, and deployment configuration.
