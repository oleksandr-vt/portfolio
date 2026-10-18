# Portfolio

Personal portfolio of Oleksandr Vintoniak, front-end developer (React & Vue) — [oleksandrvintoniak.com](https://oleksandrvintoniak.com).

Built with Vue 3, Vite, GSAP, Swiper and Lenis.

## Setup

```sh
npm install
cp .env.example .env   # VITE_GTAG_TOKEN = Google Analytics measurement ID
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build to `dist/` (also writes `works.html`, `404.html` and `sitemap.xml`) |
| `npm run preview` | Serves the production build locally |
| `npm run resume` | Prints `resume/resume.html` to `public/Oleksandr_Vintoniak.pdf` with headless Chrome (set `CHROME_PATH` if it isn't found) |

## Where things live

- `src/assets/js/data.js` — projects (`featured: true` shows on the home slider, array order sets the order) and testimonials
- `src/assets/js/seo.js` — page titles, descriptions, Open Graph and JSON-LD; `vite.config.js` injects them at build time
- `src/components/home/About.vue` — intro, stats and skill cards (icons in `src/components/icons/skills/`)
- `resume/` — resume source; not deployed

## Deploy

Every push to `master` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`.
