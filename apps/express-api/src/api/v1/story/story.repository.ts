import { RepositoryGeneralProps } from 'apps/express-api/src/models';
import { eq } from 'drizzle-orm';

import { db, storyTable } from '../../../drizzle-config';

type NewStoryTable = typeof storyTable.$inferInsert;

export const storyFindOne = async (obj: RepositoryGeneralProps) => {
  return await db.query.storyTable.findFirst({
    where: eq(obj.where.id, obj.where.val),
  });
};

export const storyFindMany = async (obj: any) => {
  return await db.query.storyTable.findMany({
    where: eq(obj.where.id, obj.where.val),
    with: obj.with,
  });
};

export const storyUpdateOne = async (obj: RepositoryGeneralProps) => {
  return await db
    .update(storyTable)
    .set(obj.data)
    .where(eq(obj.where.id, obj.where.val))
    .returning();
  // return await prisma.story.update({
  //   where: obj.where,
  //   data: obj.data,
  // });
};

export const storyCreateOne = async (data: NewStoryTable) => {
  return await db.insert(storyTable).values(data).returning();
  // return await prisma.story.create({
  //   data: obj.data,
  // });
};

export const storyDeleteOne = async (obj: RepositoryGeneralProps) => {
  return await db.delete(storyTable).where(eq(obj.where.id, obj.where.val)).returning();
  // return await prisma.story.delete({
  //   where: obj.where,
  // });
};
