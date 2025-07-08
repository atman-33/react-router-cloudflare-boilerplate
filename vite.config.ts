import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    ...(mode === 'test' ? [] : [reactRouter()]),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],    
  },
}));
