import {
  text,
  timestamp,
  pgTable,
  uuid,
  numeric,
  pgEnum,
  boolean,
  varchar,
} from 'drizzle-orm/pg-core';

export const buildTypeEnum = pgEnum('BuildTypeEnum', ['PURCHASE', 'BUILD']);

export const user = pgTable('user', {
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
});

export const user_refresh_token = pgTable('user_refresh_token', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 150 }).notNull(),
  refreshToken: varchar('refreshToken', { length: 255 }).notNull(),
  expireAt: timestamp('expire_at', { precision: 3, withTimezone: true, mode: 'string' }),
  createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
});

export const story = pgTable('story', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 150 }).notNull(),
  userId: uuid('user_id').notNull(),
  createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
});

export const task = pgTable('task', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 150 }).notNull(),
  isCompleted: boolean('isCompleted').default(false).notNull(),
  buildType: buildTypeEnum('buildType').default('BUILD').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 }),
  userId: uuid('user_id').notNull(),
  storyId: uuid('story_id').notNull(),
  createdAt: timestamp('created_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { precision: 3, withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
});
