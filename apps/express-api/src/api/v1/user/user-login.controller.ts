// import {
//   accessTokenName,
//   refreshTokenName,
//   refreshCookieUtil,
//   accessCookieUtil,
// } from '../../../utils/cookie.util';
import { NextFunction, Request, Response } from 'express';

import { generateManualError } from '../../../utils/format-response.util';

import { userLoginService } from './user-login.service';
import { userLoginValidate } from './user-login.validate';

const validateUserLoginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await userLoginValidate({ body }).catch((error) => {
      throw error;
    });
    next();
  } catch (err) {
    const errJson = await generateManualError('6435345', 'GENERAL');
    return res.status(errJson?.status).send({ ...errJson, message: err?.errors });
  }
};

const userLoginController = async (req: Request, res: Response) => {
  try {
    const results = await userLoginService(req).catch((err) => {
      throw err;
    });

    // res.clearCookie(refreshTokenName, refreshCookieUtil());
    // res.clearCookie(accessTokenName, accessCookieUtil());

    // res.cookie(refreshTokenName, results?.refreshToken, refreshCookieUtil());
    // res.cookie(accessTokenName, results?.accessToken, accessCookieUtil());

    res.status(200).send({
      accessToken: results?.accessToken,
      refreshToken: results?.refreshToken,
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

export { validateUserLoginController, userLoginController };
