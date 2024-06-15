ALTER TABLE "story" DROP CONSTRAINT "story_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_refresh_token" DROP CONSTRAINT "user_refresh_token_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "story" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "user_refresh_token" DROP COLUMN IF EXISTS "user_id";