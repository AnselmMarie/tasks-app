/* eslint-disable @typescript-eslint/no-explicit-any */
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      globalData?: {
        accessTokenReq?: string;
        refreshTokenReq?: {
          decoded: any;
          token: any;
        };
      };
    }

    interface Response {
      message?: any;
      stack?: any;
    }
  }
}
