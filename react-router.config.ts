import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  future: {
    // biome-ignore lint/style/useNamingConvention: ignore
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
