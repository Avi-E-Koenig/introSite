## Top-Level Layout

- `src/app/` – Next.js App Router pages and API routes.
  - `layout.tsx` wraps every page with `Navbar`, `Footer`, and `MyParticles` background.
  - `page.tsx` renders the landing experience (hero, about teaser, social links).
  - `about/page.tsx` shows the biography, skills grid, and GitHub calendar.
  - `resume/page.tsx` embeds `/public/resume.pdf` via `react-pdf`.
  - `api/get-pdf/route.ts` returns the hosted resume link as JSON.
- `src/components/` – Reusable UI atoms and layout.
  - `layout/` contains `navbar.tsx` and `footer.tsx` used by `RootLayout`.
  - `ui/` bundles presentation pieces: `typewriter`, `particles`, `links/link-btn`, and skills icon cards.
  - `github/calendar.tsx` wraps `react-github-calendar`.
- `src/lib/utils.ts` – Utility helpers (`cn` Tailwind class merger).
- `src/stories/` – Storybook examples for base components and pages; useful for visual testing.
- `public/` – Static assets (hero art, logos, resume PDF).
- `tailwind.config.ts` & `src/app/globals.css` – Global styling tokens, custom animations, and utilities.

## Build & Tooling

- Framework: Next.js (App Router, TypeScript).
- Styling: Tailwind CSS with project-specific color tokens and animations.
- Icons: `react-icons` plus custom wrappers (`IconCard`, `SkillsList`).
- Effects: `@tsparticles/react` for animated background, `react-simple-typewriter` for hero headline.
- PDFs: `react-pdf` for resume rendering; `pdfjs` worker configured in the resume page.
- Linting: Flat ESLint config extending `next/core-web-vitals` and `next/typescript`.
- Storybook support present via `src/stories/*` files and CSS modules.

## Architectural Notes

- `RootLayout` sets global background gradients and ensures `MyParticles` is mounted client-side.
- Client components (`'use client'`) appear where hooks or browser APIs are required (navbar, resume, typewriter, particles).
- Navigation relies on Next.js routing (`Link`) plus responsive menu state for mobile vs desktop.
- The project leans on Tailwind utility classes; `cn` should be used to merge dynamic class names when necessary.

