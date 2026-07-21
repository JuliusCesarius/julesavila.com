# julesavila.com

Personal site for Jules Avila — built with [Astro](https://astro.build), self-hosted fonts, and a warm coral/melon design system ("Luminus Warm").

## URLs

| Environment | URL |
| :--- | :--- |
| Production | https://julesavila.com |
| Preview (Vercel, per-branch/PR) | `https://julesavila-com-git-<branch>-<team>.vercel.app` |

Deploys are automatic via the Vercel ↔ GitHub integration on every push — never run `vercel deploy` manually (see the project's deploy conventions).

## Project structure

```
src/
├── data/profile.ts       # all site copy — jobs, metrics, case studies, philosophy
├── layouts/Base.astro    # head/SEO/OG/fonts + staging banner
├── components/           # Nav, Hero, Now, Metrics, Timeline, Work, Human, Footer
├── pages/
│   ├── index.astro       # one-page site
│   └── resume.astro      # printable resume + PDF download
└── styles/
    ├── tokens.css         # design tokens (colors, type, spacing)
    └── global.css
```

Edit `src/data/profile.ts` to update content — components are presentational only.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
