## Page Flow Overview

1. `RootLayout` renders globally for every route.
   - Injects background gradients, `MyParticles`, and wraps content with `Navbar` and `Footer`.
2. `Navbar` (client component)
   - Tracks scroll to toggle background opacity.
   - Provides links to `/`, `/about`, `/resume`, plus external GitHub profile.
   - Mobile menu uses `expanded` state and hamburger button.
3. `Footer` currently supplies static content (review when adding links or contact info).

## Home (`/`)

- Hero section introduces Avi Koenig with `TypewriterWrapper` cycling through role strings.
- About preview outlines skills and interests, culminating in social icon links (GitHub, LinkedIn).
- Uses static assets `home-main.svg` and `avatar.svg` from `public/`.

## About (`/about`)

- Repeats base layout width (`w-[70vw]`) for consistency.
- Biography copy plus hobby list; hero image `about.png`.
- `SkillsList` renders icons inside `IconCard` components.
- GitHub activity uses `react-github-calendar` wrapper component.

## Resume (`/resume`)

- Client component to host `react-pdf` `Document`/`Page` components.
- On mount, registers `resize` listener to calculate page width (70% of viewport width).
- `pdfjs` worker source configured to load from module; PDF resides at `/public/resume.pdf` but `GET /api/get-pdf` returns external download URL if needed.

## API Flow

- `GET /api/get-pdf`: returns JSON with `pdfUrl` pointing to Google Drive asset.
- TODO: Update error handling to return `NextResponse.json` on failure (current catch block uses `Response`).

## Visual Enhancements

- `MyParticles` initializes `@tsparticles/react` once and draws background particles globally.
- Tailwind animations (e.g., `animate-wave`) derive from definitions in `tailwind.config.ts` and `globals.css`.

