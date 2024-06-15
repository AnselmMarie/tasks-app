import { app } from '../../../app/index';
import { authRefreshExistMiddleware } from '../../../utils/auth.util';

import { userLoginController, validateUserLoginController } from './user-login.controller';
import { userLogoutController } from './user-logout.controller';

const prefix = '/v1/user';

export const registerUserApiRoutes = () => {
  app.post(
    `${prefix}/login`,
    authRefreshExistMiddleware,
    validateUserLoginController,
    userLoginController
  );

  app.post(`${prefix}/logout`, authRefreshExistMiddleware, userLogoutController);
};
