CREATE TABLE IF NOT EXISTS "story" (
	"id" serial NOT NULL,
	"name" text,
	"user_id" timestamp,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "task" (
	"id" serial NOT NULL,
	"name" text,
	"is_completed" timestamp,
	"build_type" timestamp,
	"amount" timestamp,
	"user_id" timestamp,
	"story_id" timestamp,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_refresh_token" (
	"id" serial NOT NULL,
	"user_id" text,
	"refresh_token" text,
	"expire_at" timestamp,
	"created_at" timestamp,
	"updated_at" timestamp
);
