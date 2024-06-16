/* eslint-disable @typescript-eslint/no-explicit-any */
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      accessTokenReq?: {
        sub: string;
        iat: number;
        exp: number;
      };
      refreshTokenReq?: {
        decoded: any;
        token: any;
      };
    }

    interface Response {
      message?: any;
      stack?: any;
    }
  }
}
