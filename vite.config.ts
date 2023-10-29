import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    splitVendorChunkPlugin(),
    sentryVitePlugin({
      org: "siyoon",
      project: "javascript-react",
    }),
  ],

  define: {
    "process.env": process.env,
  },

  assetsInclude: ["**/*.gltf", "**/*.png"],

  build: {
    sourcemap: true,
  },
});
