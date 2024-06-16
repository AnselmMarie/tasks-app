import { RepositoryGeneralProps } from 'apps/express-api/src/models';
import { eq } from 'drizzle-orm';

import { db, taskTable } from '../../../drizzle-config';

type NewTaskTable = typeof taskTable.$inferInsert;

export const taskFindOne = async (obj: RepositoryGeneralProps) => {
  return await db.query.taskTable.findFirst({
    where: eq(obj.where.id, obj.where.val),
  });
};

export const taskFindMany = async (obj: RepositoryGeneralProps) => {
  return await db.query.taskTable.findMany({
    where: eq(obj.where.id, obj.where.val),
    with: obj.with,
  });
};

export const taskUpdateOne = async (obj: RepositoryGeneralProps) => {
  return await db
    .update(taskTable)
    .set(obj.data)
    .where(eq(obj.where.id, obj.where.val))
    .returning();
};

export const taskCreateOne = async (data: NewTaskTable) => {
  return await db.insert(taskTable).values(data).returning();
};

export const taskDeleteOne = async (obj: RepositoryGeneralProps) => {
  return await db.delete(taskTable).where(eq(obj.where.id, obj.where.val)).returning();
};
