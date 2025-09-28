import { type DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { createRequestHandler } from "react-router";
// biome-ignore lint/performance/noNamespaceImport: ignore
import * as schema from "../database/schema";

declare module "react-router" {
  // biome-ignore lint/nursery/useConsistentTypeDefinitions: ignore
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
    db: DrizzleD1Database<typeof schema>;
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  // biome-ignore lint/suspicious/useAwait: ignore
  async fetch(request, env, ctx) {
    const db = drizzle(env.DB, { schema });

    return requestHandler(request, {
      cloudflare: { env, ctx },
      db,
    });
  },
} satisfies ExportedHandler<Env>;
