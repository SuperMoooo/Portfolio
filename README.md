# André Montoito, portfolio

Personal site of a mobile engineer (Flutter, Android) and backend developer
(Python, FastAPI, PostgreSQL). One static page: experience, the moarch CLIs,
published apps, side projects and the stack.

**Live:** <https://supermoooo.github.io/Portfolio/>

![The portfolio's hero: a full-width tile with the headline, intro and CV buttons](docs/preview.png)

## Stack

Next.js 15 (App Router, exported as static HTML), React 19 RC, TypeScript and
Tailwind CSS 3.
Fonts are Archivo and IBM Plex Mono, loaded with `next/font`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Project structure

```text
src/
├── app/                  Routes, root layout, global styles and design tokens
├── components/
│   ├── layout/           Site header, section nav, footer
│   ├── sections/         One file per page section (hero, experience, …)
│   └── ui/               Small reusable pieces: button, tags, section frame, icons
├── content/              Everything the page says: jobs, projects, CLIs, skills
├── assets/
│   ├── app-banners/      Google Play banners of the published apps
│   └── tech-logos/       Technology logos (devicon, MIT)
└── lib/                  Helpers (class names, public file paths)
public/cv/                The CV in English and Portuguese
```

To change what the site says, edit the files in `src/content/`; the
components only lay that data out.

## Design

Dark, with a pastel purple accent: wisteria `#C3B1E1`, lavender `#E6E6FA` on
hover, on a violet-black page. Each section is one compact grid of tiles
(the `Tile` component). Colours are CSS variables in `src/app/globals.css`,
exposed to Tailwind as named tokens (`canvas`, `surface`, `ink`, `accent`, …)
in `tailwind.config.ts`. Components use the token names only, never a raw hex.

## Deployment

Every push to `master` builds and deploys to GitHub Pages
(`.github/workflows/nextjs.yml`). The workflow injects the `/Portfolio` base
path at build time; `src/lib/public-path.ts` adds it to links that point at
files in `public/`.
