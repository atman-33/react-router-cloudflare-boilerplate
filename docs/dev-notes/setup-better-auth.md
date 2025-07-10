# Setup Better Auth with React Router & Cloudflare D1

This document outlines the steps to set up `better-auth` for authentication in a React Router project running on Cloudflare Workers with D1 as the database.

## 1. Prerequisites

- A Cloudflare account with a D1 database configured.
- A GitHub OAuth application.

## 2. Install Dependencies

First, you need to add the required packages for `better-auth`, its CLI, and its database dependencies.

```bash
npm install better-auth kysely kysely-d1
npm install -D @better-auth/cli
```

## 3. Environment Variables

Create a `.env` file for local development and a `.dev.vars` for wrangler. Configure your secrets in the Cloudflare dashboard for production. The following variables are required:

- `CLOUDFLARE_D1_ID`: Your Cloudflare D1 Database ID.
- `BETTER_AUTH_SECRET`: A long, random string for signing tokens. You can generate one with `openssl rand -hex 32`.
- `BETTER_AUTH_URL`: The base URL of your application (e.g., `http://localhost:5173` for local development).
- `OAUTH_GITHUB_CLIENT_ID`: Your GitHub OAuth application's Client ID.
- `OAUTH_GITHUB_CLIENT_SECRET`: Your GitHub OAuth application's Client Secret.

## 4. Configure Auth Helpers

Before generating the database schema, we need to configure the core authentication logic.

### Server-side Auth

Create `app/lib/auth/auth.server.ts` to initialize `better-auth` on the server. It uses Kysely with the D1 dialect to communicate with the database.

```typescript
// app/lib/auth/auth.server.ts
import type { BetterAuthOptions } from "better-auth";
import { betterAuth } from "better-auth";
import { CamelCasePlugin, Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";
import type { AppLoadContext } from "react-router";

let authInstance: ReturnType<typeof betterAuth>;

// Note: This has been updated to export `createBetterAuth`
// to be used in the CLI config.
export function createBetterAuth(
  database: BetterAuthOptions["database"],
  env: {
    BETTER_AUTH_SECRET: string;
    OAUTH_GITHUB_CLIENT_ID: string;
    OAUTH_GITHUB_CLIENT_SECRET: string;
  },
) {
  if (!authInstance) {
    authInstance = betterAuth({
      database,
      emailAndPassword: {
        enabled: false,
      },
      secret: env.BETTER_AUTH_SECRET,
      socialProviders: {
        github: {
          clientId: env.OAUTH_GITHUB_CLIENT_ID,
          clientSecret: env.OAUTH_GITHUB_CLIENT_SECRET,
        },
      },
    });
  }

  return authInstance;
}


export function getAuth(ctx: AppLoadContext) {
  if (!authInstance) {
    authInstance = createBetterAuth(
      {
        db: new Kysely({
          dialect: new D1Dialect({
            database: ctx.cloudflare.env.DB,
          }),
          plugins: [
            new CamelCasePlugin(),
          ],
        }),
        type: "sqlite",
      },
      ctx.cloudflare.env,
    );
  }

  return authInstance;
}
```

### Client-side Auth

Create `app/lib/auth/auth-client.ts` for client-side interactions.

```typescript
// app/lib/auth/auth-client.ts
import { createAuthClient } from "better-auth/react";

let authClient: ReturnType<typeof createAuthClient>;

export function getAuthClient({ baseURL = "http://localhost:5173" }: { baseURL?: string }) {
  if (!authClient) {
    authClient = createAuthClient({
      baseURL,
    });
  }
  return authClient;
}
```

## 5. Create Auth Config for CLI

The `@better-auth/cli` needs a configuration file to generate the database schema. Create `auth.ts` in the project root. This file imports your server-side auth configuration.

```typescript
// auth.ts
// This file is *ONLY* used by the CLI!
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/better-sqlite3";

import { createBetterAuth } from "./app/lib/auth/auth.server";
import { schema } from "./database/schema";

const db = drizzle({ connection: { source: process.env.LOCAL_DB_PATH } });
const database = drizzleAdapter(db, {
  schema,
  provider: "sqlite",
  usePlural: false,
});

export const auth = createBetterAuth(database, {
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  OAUTH_GITHUB_CLIENT_ID: process.env.OAUTH_GITHUB_CLIENT_ID,
  OAUTH_GITHUB_CLIENT_SECRET: process.env.OAUTH_OAUTH_GITHUB_CLIENT_SECRET,
} as {
  BETTER_AUTH_SECRET: string;
  OAUTH_GITHUB_CLIENT_ID: string;
  OAUTH_GITHUB_CLIENT_SECRET: string;
});
```

## 6. Database Schema Generation

Instead of writing the schema manually, we use the CLI to generate it.

### Add Generation Script

Add the `auth:db:generate` script to your `package.json`. This script finds the local D1 database file and uses it to generate the schema.

```json
// package.json
{
  "scripts": {
    "auth:db:generate": "LOCAL_DB_PATH=$(find .wrangler/state/v3/d1/miniflare-D1DatabaseObject -type f -name '*.sqlite' -print -quit) npx env-cmd -f .dev.vars -- npx @better-auth/cli generate --output=\"database/auth-schema.ts\" --y && biome format database/auth-schema.ts --write"
  }
}
```

### Generate and Apply Migrations

Now, run the scripts to generate the auth schema and then the Drizzle migration.

```bash
# 1. Generate the auth schema from your config
npm run auth:db:generate

# 2. Generate the Drizzle migration file
# "db:generate": "dotenv -- drizzle-kit generate"
npm run db:generate

# 3. Apply migration to your local database
# "db:migrate": "wrangler d1 migrations apply --local DB"
npm run db:migrate

# 4. Apply migration to your remote D1 database
# "db:migrate-production": "dotenv -- drizzle-kit migrate"
npm run db:migrate-production
```

After running `auth:db:generate`, the file `database/auth-schema.ts` will be created. Then, `drizzle-kit` will generate a migration file based on this schema.

## 7. Create API Route

`better-auth` handles various authentication flows (login, logout, callbacks) through a single API route. Create a splat route at `app/routes/api.auth.$.ts`.

```typescript
// app/routes/api.auth.$.ts
import { getAuth } from "~/lib/auth/auth.server";
import type { Route } from "./+types/route";

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  return auth.handler(request);
}

export async function action({ context, request }: Route.ActionArgs) {
  const auth = getAuth(context);
  return auth.handler(request);
}
```

## 8. Integrate into UI

Finally, use the auth helpers in your UI components. Here is an example of a login page at `app/routes/_.demo.auth/route.tsx`:

```tsx
// app/routes/_.demo.auth/route.tsx
import { getAuthClient } from "~/lib/auth/auth-client";
import { getAuth } from "~/lib/auth/auth.server";
import type { Route } from './+types/route';

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  return {
    baseURL: context.cloudflare.env.BETTER_AUTH_URL,
    user: session?.user,
  };
}

export default function DemoAuth({ loaderData }: Route.ComponentProps) {
  const { signIn } = getAuthClient({ baseURL: loaderData.baseURL });

  const signInGitHub = async () => {
    await signIn.social({
      provider: "github",
    });
  };

  return (
    <div>
      <h1>Better Auth Example</h1>
      {loaderData.user ? (
        <div>
          <pre>{JSON.stringify(loaderData.user, null, 2)}</pre>
        </div>
      ) : (
        <button onClick={() => signInGitHub()}>
          Login with GitHub
        </button>
      )}
    </div>
  );
}
```

This completes the setup of `better-auth` in your application.
