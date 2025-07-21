# Cloudflare Patterns

## Environment & Bindings
- Access Cloudflare bindings through `context.cloudflare.env`
- Use proper TypeScript types for bindings (D1, KV, etc.)
- Environment variables should be defined in `wrangler.jsonc`
- Use `.dev.vars` for local development secrets

## D1 Database Patterns
- Use Drizzle ORM for all database operations
- Access D1 through `context.cloudflare.env.DB`
- Use transactions for multi-step operations
- Implement proper error handling for database operations

## Example Database Usage
```typescript
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '~/database/schema';

export async function loader({ context }: LoaderFunctionArgs) {
  const db = drizzle(context.cloudflare.env.DB, { schema });
  const users = await db.select().from(schema.users);
  return { users };
}
```

## Workers & Edge Functions
- Keep functions lightweight and fast
- Use proper error handling and logging
- Leverage edge caching when appropriate
- Follow Cloudflare Workers best practices

## Deployment
- Use `wrangler.jsonc` for configuration
- Set up proper environment variables in Cloudflare dashboard
- Use `npm run deploy` for production deployments
- Test locally with `npm run dev` before deploying