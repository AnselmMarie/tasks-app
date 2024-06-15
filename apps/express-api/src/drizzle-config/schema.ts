import {
  text,
  timestamp,
  pgTable,
  uuid,
  numeric,
  pgEnum,
  boolean,
  varchar,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export enum BuildTypeEnum {
  PURCHASE = 'PURCHASE',
  BUILD = 'BUILD',
}
export const buildTypeEnum = pgEnum('BuildTypeEnum', ['PURCHASE', 'BUILD']);

export interface UserTableInter {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const userTable = pgTable(
  'user',
  {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    name: varchar('name', { length: 80 }).notNull(),
    email: text('email').notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      emailKey: uniqueIndex('user_email_unique').on(table.email),
    };
  }
);

export interface UserRefreshTokenTableInter {
  id: string;
  userId: string;
  refreshToken: string;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
}

export const userRefreshTokenTable = pgTable('user_refresh_token', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id')
    .references(() => userTable.id, { onDelete: 'cascade' })
    .notNull(),
  refreshToken: varchar('refresh_token', { length: 255 }).notNull(),
  expireAt: timestamp('expire_at', { precision: 3, withTimezone: true, mode: 'string' }),
  createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
});

export interface StoryTableInter {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const storyTable = pgTable('story', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 150 }).notNull(),
  userId: uuid('user_id')
    .references(() => userTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
});

export interface TaskTableInter {
  id: string;
  name: string;
  isCompleted: boolean;
  buildType: BuildTypeEnum;
  amount: number;
  userId: string;
  storyId: string;
  createdAt: string;
  updatedAt: string;
}

export const task_table = pgTable('task', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 150 }).notNull(),
  isCompleted: boolean('is_completed').default(false).notNull(),
  buildType: buildTypeEnum('build_type').default('BUILD').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 }),
  userId: uuid('user_id')
    .references(() => userTable.id, { onDelete: 'cascade' })
    .notNull(),
  storyId: uuid('story_id')
    .references(() => storyTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
});
