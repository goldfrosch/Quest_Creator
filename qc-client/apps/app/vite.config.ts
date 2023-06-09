/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/application",

  server: {
    port: 4200,
    host: "localhost",
    // vite에서 허용된 디렉토리만 서빙이 가능해서 allow 속성을 현재 디렉토리에 전부 설정을 해줘야 함
    fs: {
      allow: ["./"]
    }
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: "../../",
    }),
    vanillaExtractPlugin()
  ],

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
