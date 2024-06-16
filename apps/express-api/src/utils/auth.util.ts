import { NextFunction, Request, Response } from 'express';
import { DateTime } from 'luxon';

import { generateManualError } from './format-response.util';
import { jwtVerify, jwtSign } from './helper-promise.util';

export const accessExpireTime = '30m';
export const refreshExpireTime = '1d';
export const refreshExpireTimeObj = { day: 1 };

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CreateJWTInter {
  accessToken: any;
  refreshToken: any;
}

/**
 * @desc create a new token for a user
 */
const createJWT = async (userContent: any, createRefreshToken = false): Promise<CreateJWTInter> => {
  const jwtPayload = {
    sub: userContent?.id,
    iat: DateTime.local().toUTC().toUnixInteger(),
  };
  let refreshToken = null;

  const accessToken = await jwtSign(jwtPayload, accessExpireTime);

  if (createRefreshToken) {
    refreshToken = await jwtSign(jwtPayload, refreshExpireTime, true);
  }

  return { accessToken, refreshToken };
};

/**
 * @desc if auth exist go through the auth flow otherwise throw an error
 */
const authExistMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const accessHeader = req?.headers?.authorization?.replace('Bearer ', '');

  if (accessHeader) {
    try {
      // @todo need to figure out the jwt typing
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const token: any = await jwtVerify(accessHeader).catch(async () => {
        throw await generateManualError('2005333', 'AUTH');
      });

      if (!token || (token && token.errorType)) {
        // res.clearCookie(accessTokenName, accessCookieUtil());
        throw await generateManualError('2005333', 'AUTH');
      }

      req.accessTokenReq = token;
      next();
    } catch (err) {
      res.status(401).send(err || (await generateManualError('2005123', 'AUTH')));
    }
  } else {
    const errCatch02 = await generateManualError('2005999', 'AUTH');
    res.status(401).send(errCatch02);
  }
};

/**
 * @desc if auth refresh exist go through the auth flow otherwise throw an error
 */
const authRefreshExistMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const refreshHeader = req?.headers?.authorization?.replace('Bearer ', '');

  if (refreshHeader) {
    try {
      // @todo need to figure out the jwt typing
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const token: any = await jwtVerify(refreshHeader, true).catch(async () => {
        throw await generateManualError('2005333', 'AUTH');
      });

      req.refreshTokenReq = {
        decoded: token.errorType ? null : token,
        token: refreshHeader,
      };
      next();
    } catch (err) {
      if (req?.route?.path === '/v1/user/login' || req?.route?.path === '/v1/user/logout') {
        next();
      } else {
        res.status(401).send(err || (await generateManualError('2005123', 'AUTH')));
      }
    }
  } else {
    if (req?.route?.path === '/v1/user/login' || req?.route?.path === '/v1/user/logout') {
      next();
    } else {
      const errCatch02 = await generateManualError('2005999', 'AUTH');
      res.status(401).send(errCatch02);
    }
  }
};

export { createJWT, authExistMiddleware, authRefreshExistMiddleware };
