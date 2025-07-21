# Database Patterns

## Drizzle ORM Standards
- Schema definitions in `database/schema.ts`
- Use proper TypeScript types for all columns
- Implement relationships with foreign keys
- Use indexes for performance optimization

## Migration Workflow
- Generate migrations with `npm run db:generate`
- Apply local migrations with `npm run db:migrate`
- Apply production migrations with `npm run db:migrate-production`
- Always review generated migrations before applying

## Query Patterns
- Use Drizzle's query builder for type safety
- Implement proper error handling for database operations
- Use transactions for multi-step operations
- Leverage prepared statements for repeated queries

## Example Schema
```typescript
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});
```

## Performance Best Practices
- Use appropriate indexes for query patterns
- Implement pagination for large datasets
- Use select() to limit returned columns
- Consider query complexity and N+1 problems

## D1 Specific Considerations
- D1 is SQLite-based with some limitations
- Use appropriate data types for D1 compatibility
- Test queries locally before production deployment
- Monitor query performance and optimize as needed