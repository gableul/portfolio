# web

Personal site, portfolio & CV — the Next.js app powering it. Bilingual **EN / FR**,
automatic + manual light/dark theme, MDX blog. Migrated from a static HTML/CSS/JS
site to mirror a modern Next.js stack deployed on Cloudflare.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (PostCSS) alongside a ported design-system in `app/globals.css`
- **MDX** (`@next/mdx`) for blog content
- **next-themes** for the light/dark toggle (`data-theme`)
- **OpenNext + Wrangler** for **Cloudflare** deployment

## Structure

```
app/
  layout.tsx            → root layout: fonts, providers, floating controls
  globals.css           → design system (tokens, cards, typography, theme)
  page.tsx              → home (name, tagline, nav, socials)
  about/                → about (bio, education, skills, live age)
  work/                → professional experience
  projects/            → side-projects list
  projects/[slug]/     → project detail (data-driven, 8 projects)
  competitions/        → hackathons & awards
  research/            → research list + /research/safescale article
  blog/                → blog list + MDX posts (app/blog/<slug>/page.mdx)
components/            → providers, i18n, floating controls, cards, icons
lib/
  i18n.ts              → EN/FR dictionary (single source of visible text)
  projects.ts          → typed project data
  assets.ts            → build-time logo/screenshot discovery from /public
public/assets/<slug>/  → drop logo.(svg|png) + numbered screenshots per project
```

## Content

- **Bilingual text** lives in `lib/i18n.ts` (`dict.en` / `dict.fr`), consumed via
  the `useLang()` hook and the `<T k="..." />` component.
- **Projects** are data-driven from `lib/projects.ts` — one dynamic route renders
  all detail pages.
- **Blog posts** are MDX files under `app/blog/<slug>/page.mdx`.
- **Live age** is computed client-side in `app/about/page.tsx` (`BIRTH` constant).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # standard Next.js build
```

## Deploy (Cloudflare)

```bash
npm run preview    # build + local Cloudflare preview
npm run deploy     # build + publish via OpenNext/Wrangler
```

Fonts (Google Fonts via `next/font`): Fraunces (serif), Inter (sans),
JetBrains Mono (mono).
