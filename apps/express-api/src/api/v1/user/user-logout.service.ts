import { userRefreshTokenTable } from 'apps/express-api/src/drizzle-config';
import { Request } from 'express';

import { generateDatabaseError } from '../../../utils/format-response.util';
import { userRefreshTokenDeleteOne } from '../auth/refresh-token.repository';

import { UserLogoutRequest } from './user.models';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkUserData = async (jwtRefresh: any) => {
  const tokenRefreshQuery = await userRefreshTokenDeleteOne({
    where: {
      id: userRefreshTokenTable.refreshToken,
      val: jwtRefresh?.token,
    },
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return tokenRefreshQuery;
};

const userLogoutService = async (req: Request) => {
  const body: UserLogoutRequest = req.body;
  const jwtRefresh = body?.refreshToken;

  if (!jwtRefresh) {
    return { success: true };
  }

  await checkUserData(jwtRefresh).catch((error) => {
    throw error;
  });

  return { success: true };
};

export { userLogoutService };
