import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      /**
       * Some dependencies (e.g. `react-pdf`) import the native `canvas` module.
       * In the browser build we alias it to a no-op stub (`empty-module.ts`) so
       * Turbopack can bundle without requiring native bindings.
       */
      canvas: './empty-module.ts',
    }
  }
};

export default nextConfig;
