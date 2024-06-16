import { RepositoryGeneralProps } from 'apps/express-api/src/models';
import { eq } from 'drizzle-orm';

import { db, userTable } from '../../../drizzle-config';

type NewUserTable = typeof userTable.$inferInsert;

export const userFindOne = async (obj: RepositoryGeneralProps) => {
  return await db.query.userTable.findFirst({
    where: eq(obj.where.id, obj.where.val),
  });
};

export const userUpdateOne = async (obj: RepositoryGeneralProps) => {
  return await db
    .update(userTable)
    .set(obj.data)
    .where(eq(obj.where.id, obj.where.val))
    .returning();
};

export const userCreateOne = async (data: NewUserTable) => {
  return await db.insert(userTable).values(data).returning();
};
