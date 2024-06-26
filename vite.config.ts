import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app",
      "@features": "/src/features",
      "@entities": "/src/entities",
      "@widgets": "/src/widgets",
      "@shared": "/src/shared",
    },
  },
});
