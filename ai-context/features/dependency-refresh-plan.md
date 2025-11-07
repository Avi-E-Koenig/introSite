## Dependency Refresh Plan

- **Objective** – Align core framework, Storybook tooling, and styling stack with current stable releases while keeping the portfolio site buildable and visually consistent.
- **Primary Targets** – `next` 16.x, `react`/`react-dom` 19.2.x, Storybook 10.x suite (`@storybook/*`, `storybook`, `@chromatic-com/storybook`), `tailwindcss` 4.x, `tailwind-merge` 3.x, `typescript` 5.9.x, `eslint` 9.39.x, `postcss` 8.5.6, `@types/*` 19.2.x/24.x, UI add-ons such as `@tsparticles/slim` 3.9.x, `react-github-calendar` 4.5.11, `react-parallax-tilt` 1.7.312, `react-pdf` 10.x.
- **Out-of-Scope** – Runtime feature work, design refresh, or infrastructure changes beyond what the new versions demand.

## Upgrade Strategy

- **Phase 1 – Minor & Patch bumps**: Update safe libraries first (TypeScript, ESLint, `postcss`, type packages, `@tsparticles/slim`, `react-github-calendar`, `react-parallax-tilt`). Validate lint and unit/storybook builds continue passing. Allows early regression detection.
- **Phase 2 – Core framework**: Upgrade `react`/`react-dom` together, then `next`. Confirm compatibility with Next 16 release notes (check removal of legacy experimental flags, verify `next.config.ts`). Run `next lint`, `next build`, and `next dev` smoke tests.
- **Phase 3 – Storybook suite**: Bump `storybook` and all related addons to 10.x. Review migration notes for `@storybook/nextjs` and verify builder config, preview settings, and custom webpack overrides (see `./.storybook` directory if present).
- **Phase 4 – Tailwind stack**: Move to Tailwind CSS 4.x and `tailwind-merge` 3.x; inspect `tailwind.config.ts` for breaking config changes (e.g., default content discovery, plugin API adjustments). Re-run `npm run build` to ensure PostCSS pipeline succeeds.
- **Phase 5 – `react-pdf` major**: Integrate 10.x breaking changes (module entry adjustments, worker setup). Review usage in `src/components/Resume` (confirm actual location) and update dynamic import/config per new API.
- **Lock down**: After each phase, commit with scoped message and optionally record `changeset` if repo adopts them (confirm policy in `README.md`).

## Migration Notes

- Review Next.js 16 migration guide for updated turbopack default behavior and potential `app/` vs `pages/` constraints; confirm `next.config.ts` options like `experimental.turbo` or `images` remain valid.
- For Storybook 10, ensure config files under `.storybook` follow `main.ts`, `preview.ts`, and compatibility with `storybook-framework-nextjs` preset; expect ESM-only config.
- Tailwind 4 introduces default content scanning and theming tweaks—double-check custom color palette or plugin usage in `tailwind.config.ts` and `src/styles/globals.css` (if present).
- `react-pdf` 10 may require updating worker registration to `@react-pdf/renderer` approach or new asset path; consult official migration doc.
- TypeScript 5.9 with React 19 needs `"jsx": "react-jsx"` or `"react-jsx"` automatic runtime (confirm in `tsconfig.json`).

## Validation Checklist

- `npm run lint`
- `npm run test` (if available) or alternative verification; otherwise focus on Storybook stories.
- `npm run build` and `npm start` smoke test.
- `npm run storybook` to ensure local instance renders without build errors.
- Manual verification of PDF viewer route, particle background, and GitHub calendar after upgrades.

## Risks & Mitigations

- **Breaking framework APIs** – Mitigate via phased upgrade, keep `pages`/`app` usage under review, rollback plan by tagging commit before migration.
- **Storybook config drift** – Use `npx storybook@latest automigrate` helper where applicable, commit config updates in same phase.
- **Tailwind 4 config mismatch** – Prepare fallback branch; compare generated CSS before/after to ensure design parity.
- **Library API shifts (`react-pdf`)** – Allocate time for component refactor and update associated types.

## Follow-Up Tasks

- After successful upgrade, regenerate `package-lock.json` and document new minimum Node version if requirements change.
- Update `README.md` with any new scripts or breaking workflow changes.
- Communicate upgrade summary in PR description, noting manual tests completed and residual risks.

