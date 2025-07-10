# React Router + Cloudflare Boilerplate

A modern, production-ready template for building full-stack React applications using React Router, Cloudflare (Pages, Workers, D1), Drizzle ORM, and `better-auth`.

## Features

- **Framework**: [React Router v7](https://reactrouter.com/)
- **Platform**: [Cloudflare](https://www.cloudflare.com/) (Pages, Workers, D1)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [better-auth](https://github.com/drwpow/better-auth)
- **UI/Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Lucide Icons](https://lucide.dev/)
- **Tooling**: [Vite](https://vitejs.dev/), [Biome](https://biomejs.dev/), [TypeScript](https://www.typescriptlang.org/), [Vitest](https://vitest.dev/)
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations

## Getting Started

### 1. Installation

Install the dependencies:

```bash
npm install
```

### 2. Environment Variables

Copy the example environment file to both `.dev.vars` (for local development with Wrangler) and `.env` (for other scripts like Drizzle Kit).

```bash
cp .env.example .dev.vars
cp .env.example .env
```

Be sure to fill in the required variables in both files.

### 3. Database Setup

Run the initial database migrations for your local D1 database.

```bash
# Generate the auth schema
npm run auth:db:generate

# Migrate the main schema
npm run db:migrate
```

### 4. Start Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Available Scripts

- `dev`: Starts the development server with HMR.
- `build`: Creates a production-ready build of your application.
- `preview`: Serves the production build locally for previewing.
- `deploy`: Builds and deploys your application to Cloudflare.
- `db:generate`: Generates Drizzle ORM migration files based on schema changes.
- `db:migrate`: Applies pending migrations to the local D1 database.
- `db:migrate-production`: Applies pending migrations to the production D1 database.
- `auth:db:generate`: Generates the database schema for `better-auth`.
- `check`: Runs type checking and Biome for code quality.
- `biome:check`: Lints and formats the codebase using Biome.
- `test`: Runs tests using Vitest.

## Deployment

Deployment is done using the Wrangler CLI.

### 1. Create Production D1 Database

First, create a D1 database in your Cloudflare account.

```bash
npx wrangler d1 create <your-database-name>
```

### 2. Configure Wrangler

Update your `wrangler.jsonc` file with the `database_name` and `database_id` from the previous step.

```jsonc
// wrangler.jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "<your-database-name>",
    "database_id": "<your-database-id>"
  }
]
```

### 3. Run Production Migration

Update your `drizzle.config.ts` to point to your production database, and then run the production migration command:

```bash
npm run db:migrate-production
```

### 4. Deploy to Cloudflare

To build and deploy your application to production:

```bash
npm run deploy
```

## Authentication

This boilerplate uses [`better-auth`](https://github.com/drwpow/better-auth) for authentication, pre-configured for GitHub. Key files include:

- `auth.ts`: Main `better-auth` server configuration.
- `app/lib/auth/auth.server.ts`: Server-side authentication utilities.
- `app/lib/auth/auth-client.ts`: Client-side authentication utilities.
- `app/routes/api.auth.$`: Route for handling authentication callbacks.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) for a modern, component-based styling experience.

To add new `shadcn/ui` components, you can use their CLI:

```bash
npx shadcn-ui@latest add <component-name>
```

---

Built with ❤️ using React Router and Cloudflare.
