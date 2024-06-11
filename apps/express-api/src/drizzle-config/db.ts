import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema';
export const client = new Client({
  host: process.env.DATABASE_HOST || '',
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
});
// { schema } is used for relational queries
export const db = drizzle(client, { schema });
