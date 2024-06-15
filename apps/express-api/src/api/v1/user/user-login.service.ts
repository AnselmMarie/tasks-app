import { userTable } from 'apps/express-api/src/drizzle-config';
import { Request } from 'express';
import { DateTime } from 'luxon';

import { createJWT, refreshExpireTimeObj } from '../../../utils/auth.util';
import { generateDatabaseError, generateManualError } from '../../../utils/format-response.util';
import { bcryptCompare } from '../../../utils/helper-promise.util';
import { userRefreshTokenCreateOne } from '../auth/refresh-token.repository';

import { userFindOne } from './user.repository';

interface CheckUserDataProps {
  email: string;
  password: string;
}

const checkUserData = async (argsData: CheckUserDataProps) => {
  const userQuery = await userFindOne({
    where: {
      id: userTable.email,
      val: argsData.email,
    },
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  if (!userQuery) {
    throw await generateManualError('5003299', 'USER');
  }

  const valid = await bcryptCompare(argsData.password, userQuery?.password).catch((err) => {
    throw err;
  });

  if (!valid) {
    throw await generateManualError('5003299', 'USER');
  }

  return userQuery;
};

/** @todo I need to look into this code some more */
// const checkUserRefreshCookieStatus = async (jwtRefresh: any, userData: any) => {
//   /** Checking if the token exist
//    * 1 - User logs in and in the future logs out
//    * 2 - Someone steals the refresh token before the user logouts
//    * 3 - Then someone tries to use the stolen token after the logout
//    * If the a token is not found in the database, then someone is trying to reuse a token that was removed a while ago
//    */

//   console.log('jwtRefresh', jwtRefresh);

//   if (!jwtRefresh) {
//     console.log('returned too early');
//     return;
//   }

//   const tokenQuery: any = await userRefreshTokenFindOne({
//     where: {
//       refreshToken: jwtRefresh?.token,
//     },
//     select: {
//       userId: true,
//       refreshToken: true,
//       expireAt: true,
//     },
//   }).catch(async (err: any) => {
//     console.log('err', err);
//     throw (await generateDatabaseError(err)) || err;
//   });

//   console.log('jwtRefresh?.decoded', jwtRefresh?.decoded);
//   console.log('jwtRefresh?.decoded?.sub', jwtRefresh?.decoded?.sub);

//   if (!tokenQuery) {
//     await userRefreshTokenDeleteMany({
//       where: {
//         userId: userData?.id,
//       },
//     }).catch(async (err: any) => {
//       throw (await generateDatabaseError(err)) || err;
//     });
//     throw await generateManualError('8008009', 'USER-TOKEN');
//   }

//   // if (jwtRefresh && !jwtRefresh?.decoded?.sub) {
//   //   await userRefreshTokenDeleteOne({
//   //     where: {
//   //       refreshToken: jwtRefresh?.token,
//   //     },
//   //   }).catch(async (err: any) => {
//   //     throw (await generateDatabaseError(err)) || err;
//   //   });
//   //   throw await generateManualError('8008009', 'USER-TOKEN');
//   // }

//   return;
// };

/**
 * @desc Make the Activated status true
 */
const userLoginService = async (req: Request) => {
  // const jwtRefresh = req?.refreshTokenReq;
  const argsData = req?.body;
  argsData.email = argsData?.email?.toLowerCase();

  const userData = await checkUserData(argsData).catch((error) => {
    throw error;
  });

  // await checkUserRefreshCookieStatus(jwtRefresh, userData).catch((error) => {
  //   throw error;
  // });

  const token = await createJWT(userData, true).catch((error) => {
    throw error;
  });

  await userRefreshTokenCreateOne({
    userId: userData?.id,
    refreshToken: token?.refreshToken,
    expireAt: DateTime.local().plus(refreshExpireTimeObj).toUTC().toISO(),
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return token;
};

export { userLoginService };
