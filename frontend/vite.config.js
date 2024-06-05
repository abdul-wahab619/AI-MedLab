import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitepluginrewriteall from "vite-plugin-rewrite-all";

export default defineConfig({
  plugins: [react(), vitepluginrewriteall()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
