# Coding Standards

## Comments and Documentation
- Write all source code comments in English
- Use clear and concise language for comments
- Document complex logic and business rules
- Include JSDoc comments for public functions and components

## Code Formatting & Linting
- Use Biome for all linting and formatting
- Single quotes for JavaScript/TypeScript strings
- 2-space indentation
- Organize imports automatically
- Run `npm run biome:check` before commits

## TypeScript Standards
- Use strict TypeScript configuration
- Prefer type inference over explicit types when obvious
- Use proper typing for Cloudflare bindings and environment variables
- Leverage Drizzle ORM types for database operations

## React/Component Standards
- Use functional components with hooks
- Prefer named exports for components
- Use proper TypeScript interfaces for props
- Follow shadcn/ui patterns for UI components
- Use React Router v7 data loading patterns (loaders/actions)

## File Naming Conventions
- Use kebab-case for file names
- Use PascalCase for component files
- Route files follow React Router v7 conventions (route.tsx, layout.tsx)
- Use descriptive names that reflect component purpose

## Import Organization
- External libraries first
- Internal utilities and components
- Relative imports last
- Use path aliases when configured
