import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      canvas: './empty-module.ts'
    }
  },
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['typewind/swc', {}]],
  }
};

export default nextConfig;
