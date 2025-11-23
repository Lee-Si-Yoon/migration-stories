import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  /** {@link https://nextjs.org/docs/app/guides/memory-usage#disable-static-analysis} */
  experimental: {
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
  },
  webpack(config, { dev }) {
    /** {@link https://nextjs.org/docs/app/guides/memory-usage#disable-webpack-cache} */
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      });
    }

    return config;
  },
};

export default nextConfig;
