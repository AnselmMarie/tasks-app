import {
  UserRefreshTokenTableInter,
  userRefreshTokenTable,
} from 'apps/express-api/src/drizzle-config';
import { Request } from 'express';
import { DateTime } from 'luxon';

import { createJWT, CreateJWTInter, refreshExpireTimeObj } from '../../../utils/auth.util';
import { generateDatabaseError, generateManualError } from '../../../utils/format-response.util';

import { RefreshTokenRequest } from './auth.models';
import {
  userRefreshTokenDeleteMany,
  userRefreshTokenFindOne,
  userRefreshTokenDeleteOne,
  userRefreshTokenCreateOne,
} from './refresh-token.repository';

const checkUserRefreshCookieStatus = async (
  // @todo need to figure out the jwt typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jwtRefresh: any
): Promise<UserRefreshTokenTableInter> => {
  const tokenQuery = await userRefreshTokenFindOne({
    where: { id: userRefreshTokenTable?.['refreshToken'], val: jwtRefresh?.token },
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  if (!tokenQuery) {
    await userRefreshTokenDeleteMany({
      where: {
        id: userRefreshTokenTable?.['userId'],
        val: jwtRefresh?.decoded?.sub,
      },
    }).catch(async (err) => {
      throw (await generateDatabaseError()) || err;
    });
    // res.clearCookie(refreshTokenName, refreshCookieUtil());
    // res.clearCookie(accessTokenName, accessCookieUtil());
    throw await generateManualError('8008009', 'USER-TOKEN');
  }

  if (jwtRefresh && !jwtRefresh?.decoded?.sub) {
    // res.clearCookie(refreshTokenName, refreshCookieUtil());
    // res.clearCookie(accessTokenName, accessCookieUtil());
    throw await generateManualError('8008999', 'USER-TOKEN');
  }

  if (jwtRefresh && jwtRefresh?.decoded?.sub) {
    await userRefreshTokenDeleteOne({
      where: {
        id: userRefreshTokenTable?.['refreshToken'],
        val: jwtRefresh?.token,
      },
    }).catch(async (err) => {
      throw (await generateDatabaseError()) || err;
    });
  }

  return tokenQuery;
};

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createRefreshCookieDatabase = async (userId: string, refreshToken: any): Promise<void> => {
  await userRefreshTokenCreateOne({
    userId,
    refreshToken,
    expireAt: DateTime.local().plus(refreshExpireTimeObj).toUTC().toISO(),
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });
};

const userRefreshTokenService = async (req: Request): Promise<CreateJWTInter> => {
  const body: RefreshTokenRequest = req.body;
  const jwtRefresh = body?.refreshToken;

  const tokenQuery = await checkUserRefreshCookieStatus(jwtRefresh).catch((error) => {
    throw error;
  });

  const token = await createJWT({ id: tokenQuery?.userId }, true).catch((error) => {
    throw error;
  });

  await createRefreshCookieDatabase(tokenQuery?.userId, token?.refreshToken).catch((error) => {
    throw error;
  });

  return token;
};

export { userRefreshTokenService };
