## Language & Framework

- Next.js App Router with TypeScript; prefer functional components exported as defaults per file.
- Mark components that rely on hooks, browser APIs, or third-party client libraries with `'use client'` at the top.
- Co-locate component variants under `src/components/<domain>` to keep UI concerns modular.

## Styling

- Tailwind CSS is the primary styling system.
  - Rely on utility classes for layout and spacing; reserve `globals.css` for reusable layers.
  - Merge conditional class names with the `cn` helper from `src/lib/utils.ts`.
- Global color tokens, gradients, and animations live in `tailwind.config.ts` and `globals.css`; reuse existing tokens before creating new ones.

## State & Effects

- Use React hooks inside client components only.
- Global effects (e.g., `MyParticles` initialization) should run inside `useEffect` with dependency arrays to avoid duplicate setup.
- Navbar scroll behavior toggles `navColour` via `window.scrollY`; ensure any new scroll listeners clean up in `useEffect` returns.

## Data & APIs

- API routes live under `src/app/api`; return `NextResponse` objects and handle errors with logs plus meaningful messages.
- Frontend requests for static assets (resume PDF) either use the API route (`/api/get-pdf`) or static `public` files.

## Accessibility & UX

- Supply `alt` text for `next/image` usage and `aria-label` for interactive icons via `LinkBtn` or raw anchors.
- Keep interactive icons keyboard accessible; `Link` components should wrap textual labels or include screen-reader text.

## Tooling

- ESLint extends `next/core-web-vitals`; ensure new code satisfies lint rules before committing.
- Storybook stories reside in `src/stories`; mirror component updates there when practical for visual regression coverage.

