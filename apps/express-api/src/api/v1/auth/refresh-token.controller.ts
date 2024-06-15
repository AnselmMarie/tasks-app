import { Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { userRefreshTokenService } from './refresh-token.service';

const userRefreshTokenController = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = await userRefreshTokenService(req).catch((err) => {
      throw err;
    });

    // res.clearCookie(refreshTokenName, refreshCookieUtil());
    // res.clearCookie(accessTokenName, accessCookieUtil());

    // res.cookie(refreshTokenName, results?.refreshToken, refreshCookieUtil());
    // res.cookie(accessTokenName, results?.accessToken, accessCookieUtil());

    res.status(200).send({
      success: true,
      refreshToken: results?.refreshToken,
      accessToken: results?.accessToken,
    });
  } catch (error) {
    if (error.errorCode) {
      res.status(error?.status).send(error);
    } else {
      const error = await generateManualError('9999999', 'GENERAL');
      res.status(error?.status).send(error);
    }
  }
};

export { userRefreshTokenController };
