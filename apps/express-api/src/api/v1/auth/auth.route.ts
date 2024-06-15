import { app } from '../../../app/index';
import { authExistMiddleware, authRefreshExistMiddleware } from '../../../utils/auth.util';

import { authCheckServiceController } from './auth.controller';
import { userRefreshTokenController } from './refresh-token.controller';

const prefix = '/v1/auth';

export const registerAuthApiRoutes = () => {
  app.get(`${prefix}/check`, authExistMiddleware, authCheckServiceController);
  app.get(`${prefix}/refresh-token`, authRefreshExistMiddleware, userRefreshTokenController);
};
