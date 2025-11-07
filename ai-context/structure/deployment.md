## Hosting

- Platform: Vercel (Next.js optimized hosting, automatic CI/CD from Git branches).
- Default production branch: `main` (promote via merge or manual deployment in Vercel dashboard).
- Preview deployments: Triggered for pull requests/feature branches; accessible through Vercel-provided URLs.

## Build & Runtime Settings

- Framework preset: `Next.js` with App Router.
- Install command: `npm install` (relies on `package-lock.json`).
- Build command: `npm run build` (Next.js production build).
- Output: Vercel detects `.next` automatically; no custom output directory required.
- Environment: Node.js 18+ (Vercel default aligns with Next.js requirements).

## Environment Variables

- None currently required for the public site.
- Add env vars in Vercel dashboard (`Settings → Environment Variables`) for future integrations; remember to redeploy after changes.

## Deployment Workflow

1. **Local development**: `npm run dev`.
2. **Testing**: ensure lint/build succeed locally (`npm run lint`, `npm run build`).
3. **Push to remote**: feature branches (e.g., `feature/indexing-mapping`) trigger preview deploys.
4. **Merge to main**: Vercel automatically creates/updates production deployment.
5. **Manual redeploy**: Use Vercel dashboard if rebuilding from latest commit without new push.

## Operational Notes

- Monitor build logs in Vercel when adding large dependencies (e.g., `@tsparticles`, `react-pdf`).
- Static assets in `public/` are cached via Vercel CDN; update filenames or use cache invalidation when replacing critical files like `resume.pdf`.
- API routes (`src/app/api/*`) run on Vercel Edge by default; if Node-specific features are needed, configure runtime to `nodejs` in route file or project settings.

