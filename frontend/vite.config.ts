import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: "src/*",
      extension: [".js", ".jsx", ".ts", ".tsx"],
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
  },

  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": "http://localhost:9999",
    },
  },
});
