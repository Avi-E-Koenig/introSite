## Published Features

- **Particle Background** – Global animated particles from `MyParticles` provide motion without impacting page content.
- **Responsive Navigation** – `Navbar` switches between desktop link row and collapsible mobile menu, includes GitHub CTA.
- **Hero Introduction** – Landing page highlights name, avatar illustration, and rotating role descriptors via `TypewriterWrapper`.
- **About Section** – Detailed biography, hobby list, and skill highlights presented with Tailwind typography.
- **Skills Grid** – `SkillsList` showcases core technologies using `react-icons` inside stylized `IconCard` wrappers.
- **Social Links** – Prominent GitHub and LinkedIn icons with hover animations encourage contact.
- **GitHub Activity** – `/about` embeds contribution heatmap powered by `react-github-calendar`.
- **Resume Viewer** – `/resume` loads a multi-page PDF with adaptive sizing using `react-pdf` (`pdfjs` worker configured for Next.js).
- **API Endpoint** – `/api/get-pdf` exposes a JSON link to the hosted resume file for programmatic access.

## Supporting Assets

- `public/home-main.svg`, `public/avatar.svg`, and `public/about.png` provide hero and illustration imagery.
- `public/resume.pdf` packaged for local viewing; keep in sync with external Google Drive link referenced by the API.

