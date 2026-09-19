import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";
import api from "./api";

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  plugins: [vue(), api()],
  server: { port: 7072, host: true },
});
