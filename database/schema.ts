import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { account, session, user, verification } from './auth-schema';

const guestBook = sqliteTable("guestBook", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const schema = { user, session, account, verification, guestBook };

export { account, guestBook, session, user, verification };
