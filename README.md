# Caleb Poggemeyer — Portfolio Site

A personal portfolio site built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Editing content

All resume content (projects, skills, experience, contact links) lives in one
place: [`src/data/resume.ts`](src/data/resume.ts). Edit that file to update
copy without touching any components.

Before going live, update the placeholder values in `src/data/resume.ts`:

- `profile.linkedin` — your real LinkedIn URL
- `profile.github` — your real GitHub URL
- each project's `links` — real GitHub/demo URLs (currently `#`)

## Replacing placeholder images

- `public/profile.svg` — swap for a real headshot (`profile.jpg`/`.png`, update
  the `src` in [`src/components/Hero.tsx`](src/components/Hero.tsx))
- `public/projects/*.svg` — swap for real project screenshots, keeping the
  same filenames, or update the `image` field per project in
  [`src/data/resume.ts`](src/data/resume.ts)
- `public/resume.pdf` — replace with your latest resume export whenever it
  changes

## Deploying for free with a custom URL

This repo is already wired up to deploy to **GitHub Pages** for free via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — no domain
purchase required.

For the cleanest possible free URL (`https://<your-username>.github.io`, no
extra path), do this:

1. Create a **new GitHub repo named exactly `<your-username>.github.io`**
   (e.g. `calebpoggemeyer.github.io`).
2. Push this project to that repo's `main` branch.
3. In the repo settings → **Pages**, set the source to **GitHub Actions**.
4. Push to `main` (or re-run the workflow) — the site deploys automatically.

If you'd rather use a regular repo name instead (e.g. `portfolio`), the site
will be served at `https://<your-username>.github.io/portfolio/` instead, and
you'll need to add `base: '/portfolio/'` to `vite.config.ts` so asset paths
resolve correctly.

### Later: adding a real custom domain

If you ever buy a domain, add a `public/CNAME` file containing just the
domain (e.g. `calebpoggemeyer.com`) and point the domain's DNS at GitHub
Pages — no code changes needed beyond that.
