import { RepositoryGeneralProps } from 'apps/express-api/src/models';
import { eq } from 'drizzle-orm';

import { db, userRefreshTokenTable } from '../../../drizzle-config';

type NewUserRefreshTokenTable = typeof userRefreshTokenTable.$inferInsert;

export const userRefreshTokenFindOne = async (obj: RepositoryGeneralProps) => {
  // obj.where.id = userRefreshTokenTable?.['id'];
  return await db.query.userRefreshTokenTable.findFirst({
    where: eq(obj.where.id, obj.where.val),
  });
};

export const userRefreshTokenUpdateOne = async (obj: RepositoryGeneralProps) => {
  // obj.where.id = userRefreshTokenTable?.['id'];
  return await db
    .update(userRefreshTokenTable)
    .set(obj.data)
    .where(eq(obj.where.id, obj.where.val));
};

export const userRefreshTokenCreateOne = async (data: NewUserRefreshTokenTable) => {
  return await db.insert(userRefreshTokenTable).values(data);
};

export const userRefreshTokenDeleteMany = async (obj: RepositoryGeneralProps) => {
  return await db.delete(userRefreshTokenTable).where(eq(obj.where.id, obj.where.val)).returning();
};

export const userRefreshTokenDeleteOne = async (obj: RepositoryGeneralProps) => {
  return await db.delete(userRefreshTokenTable).where(eq(obj.where.id, obj.where.val)).returning();
};
