# Technology Stack

## Core Framework & Runtime
- **React Router v7** - Full-stack React framework with SSR
- **Cloudflare Workers** - Edge runtime environment
- **Vite** - Build tool and development server

## Database & ORM
- **Cloudflare D1** - SQLite database at the edge
- **Drizzle ORM** - Type-safe database toolkit
- **Kysely** - SQL query builder (used for better-auth integration)

## Authentication
- **better-auth** - Authentication library with OAuth support
- **GitHub/Google OAuth** - Social login providers

## Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Lucide React** - Icon library

## Code Quality & Tooling
- **TypeScript** - Static type checking
- **Biome** - Linting and formatting (replaces ESLint + Prettier)
- **Vitest** - Testing framework
- **Husky** - Git hooks for pre-commit checks

## Common Commands

### Development
```bash
npm run dev          # Start development server with HMR
npm run preview      # Preview production build locally
```

### Building & Deployment
```bash
npm run build        # Build for production
npm run deploy       # Build and deploy to Cloudflare
```

### Database Operations
```bash
npm run db:generate           # Generate Drizzle migration files
npm run db:migrate           # Apply migrations to local D1
npm run db:migrate-production # Apply migrations to production D1
npm run auth:db:generate     # Generate better-auth schema
```

### Code Quality
```bash
npm run check           # Run type checking and Biome
npm run biome:check     # Lint and format code
npm run typecheck       # Type check only
npm run test           # Run tests with Vitest
```

### Cloudflare Utilities
```bash
npm run cf-typegen     # Generate Cloudflare Worker types
```

## Environment Setup
- `.dev.vars` - Local development environment variables (for Wrangler)
- `.env` - Environment variables for other scripts (Drizzle Kit)
- Both files should contain the same variables but are used by different tools