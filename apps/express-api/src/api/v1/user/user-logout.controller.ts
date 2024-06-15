import { Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { userLogoutService } from './user-logout.service';

const userLogoutController = async (req: Request, res: Response) => {
  try {
    await userLogoutService(req).catch((err) => {
      throw err;
    });

    // res.clearCookie(refreshTokenName, refreshCookieUtil());
    // res.clearCookie(accessTokenName, accessCookieUtil());

    res.status(204).send();
  } catch (error) {
    if (error.errorCode) {
      res.status(error?.status).send(error);
    } else {
      const error = await generateManualError('9999999', 'GENERAL');
      res.status(error?.status).send(error);
    }
  }
};

export { userLogoutController };
