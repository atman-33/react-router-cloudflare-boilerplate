---
inclusion: always
---

# Technology Stack & Development Guide

## Core Stack
- **React Router v7** - Full-stack React framework with SSR
- **Cloudflare Workers** - Edge runtime environment  
- **Cloudflare D1** - SQLite database at the edge
- **Drizzle ORM** - Type-safe database operations
- **better-auth** - Authentication with Google OAuth
- **Conform + Zod** - Form validation and handling
- **react-call** - Programmatic modal/dialog management
- **Tailwind CSS v4** + **shadcn/ui** - Styling and components
- **TypeScript** + **Biome** - Type safety and code quality

## Development Patterns

### Database Operations
- Use Drizzle ORM for all database queries
- Access D1 via `context.cloudflare.env.DB`
- Generate migrations with `npm run db:generate`
- Apply migrations: `npm run db:migrate` (local) or `npm run db:migrate-production`

### Authentication Requirements
- **Google OAuth only** - no other providers
- All app features require authentication
- Use `requireAuth()` in loaders for protected routes
- Access user via `context.cloudflare.env` bindings

### React Router v7 Conventions
- Route files: `route.tsx` with typed `loader`/`action` functions
- Use `useLoaderData()` and `useActionData()` hooks
- File-based routing in `app/routes/`
- Underscore prefixes for route groups (`_app`, `_landing`)

### Form Handling (Conform + Zod)
- Use Conform for form state management and validation
- Define Zod schemas for type-safe validation
- Server-side validation with `parseWithZod()` in actions
- Client-side validation with `useForm()` hook
- Custom `ConformInput` component for consistent error display
- Pattern: Create custom hooks like `useSampleForm()` for reusable forms

### Modal Management (react-call)
- Use `createCallable()` for programmatic modals/dialogs
- Wrap shadcn/ui components for consistent styling
- Add `<ComponentName>.Root />` to root layout for rendering
- Call modals with `await Component.call(props)` for async responses
- Return typed responses from modal interactions

### Code Standards
- Use Biome for all formatting/linting (`npm run biome:check`)
- TypeScript strict mode enabled
- Functional components with hooks
- kebab-case file names, PascalCase components
- English comments and documentation

## Essential Commands
```bash
npm run dev              # Development server
npm run build            # Production build
npm run deploy           # Deploy to Cloudflare
npm run db:generate      # Create migrations
npm run db:migrate       # Apply local migrations
npm run biome:check      # Format and lint
npm run typecheck        # Type checking
```

## Environment Files
- `.dev.vars` - Wrangler local development
- `.env` - Drizzle Kit and other tools
- Both should contain identical variables