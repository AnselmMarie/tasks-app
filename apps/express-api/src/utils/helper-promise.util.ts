/** @todo fix typing */

import bcrypt from 'bcryptjs';
import { Base64 } from 'js-base64';
import jwt from 'jsonwebtoken';

import { thirdPartyConfig } from '../config/third.party.config';

import { generatePasswordUtil } from './generate-password.util';

/**
 * @desc Stringify an object
 */
export const jsonStringify = (el: object): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.stringify(el));
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @desc Remove the string constraints from the object
 */
export const jsonParse = (el: string): Promise<object | Error> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(el));
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @desc compare if two strings are the same via bcrypt compare
 */
export const bcryptCompare = (clientPass: string, serverPass: string): Promise<boolean | Error> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(bcrypt.compare(clientPass, serverPass));
      } catch (err) {
        reject(err);
      }
    }, 0);
  });
};

/**
 * @desc generate encryption via bcrypt
 */
export const bcryptGenerate = (content: string): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const salt = bcrypt.genSaltSync(10);
        resolve(bcrypt.hashSync(content, salt));
      } catch (err) {
        reject(err);
      }
    }, 0);
  });
};

/**
 * @desc send the temp password to the user
 */
export const generateCode = (): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(generatePasswordUtil({}));
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @desc encode content using base64
 */
export const base64Encode = (el: string): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(Base64.encode(el));
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @desc decode base64 content
 */
export const base64Decode = (el: string): Promise<unknown | Error> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(Base64.decode(el));
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @desc verify a json token
 */
// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jwtVerify = (token: any, isRefresh = false) => {
  const secret = isRefresh ? thirdPartyConfig.jwt.secretRefresh : thirdPartyConfig.jwt.secret;

  return new Promise((resolve, reject) => {
    try {
      resolve(
        // @todo need to figure out the typing
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jwt.verify(token, secret as string, (err: any, decoded: any) =>
          err ? { errorType: 'Invalid Token', message: err } : decoded
        )
      );
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @desc signing a json token
 */
// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jwtSign = (jwtPayload: any, expiresIn: string, isRefresh = false) => {
  const secret = isRefresh ? thirdPartyConfig.jwt.secretRefresh : thirdPartyConfig.jwt.secret;

  return new Promise((resolve, reject) => {
    try {
      resolve(
        jwt.sign(jwtPayload, secret as string, {
          expiresIn,
        })
      );
    } catch (err) {
      reject(err);
    }
  });
};
