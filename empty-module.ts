/**
 * Stub module used to satisfy `canvas` imports in libraries such as `react-pdf`.
 * The real `canvas` package relies on native bindings, which we avoid bundling in the
 * browser build. Turbopack resolves `canvas` to this empty module via the alias in
 * `next.config.ts`, allowing dependent packages to load without runtime crashes.
 */
const emptyModule = {} as const;

export default emptyModule;