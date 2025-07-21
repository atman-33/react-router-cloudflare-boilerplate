# Authentication Patterns

## better-auth Configuration
- Main auth config in `auth.ts`
- Server-side utilities in `app/lib/auth/auth.server.ts`
- Client-side utilities in `app/lib/auth/auth-client.ts`
- **Google OAuth provider** configured for this app

## Authentication Requirements
- **Required**: Users must log in to access logging features
- **Provider**: Google OAuth only (as specified in PRD)
- **UI**: Show "Login" button for unauthenticated users
- **User Info**: Display user information and "Logout" option in header

## Route Protection
- Protect all related routes (list, add, edit, delete)
- Redirect unauthenticated users to login

## Example Protected Route
```typescript
import { requireAuth } from '~/lib/auth/auth.server';

export async function loader({ request, context }: LoaderFunctionArgs) {
  const user = await requireAuth(request, context);
  return { user };
}
```

## Authentication Flow
- Login/logout handled through better-auth API routes
- Session management with secure cookies
- Proper CSRF protection enabled
- Use `useAuth()` hook for client-side auth state

## Database Schema
- Auth tables generated with `npm run auth:db:generate`
- User data stored in D1 database

## Security Best Practices
- Always validate auth state server-side
- Use HTTPS in production
- Implement proper session timeout
- Handle auth errors gracefully