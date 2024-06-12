import { findEnvUtil } from '@tasks-app/utils';
import * as dotenv from 'dotenv';

import type { Config } from 'drizzle-kit';

dotenv.config({ path: findEnvUtil() });

export default {
  dialect: 'postgresql',
  out: './drizzle',
  schema: './src/drizzle-config/schema.ts',
  dbCredentials: {
    host: process.env.DATABASE_HOST || '',
    port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
    user: process.env.DATABASE_USER || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
  },
  verbose: false, // Print all statements
  strict: true,
} satisfies Config;
