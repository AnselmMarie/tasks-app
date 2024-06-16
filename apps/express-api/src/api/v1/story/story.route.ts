import { app } from '../../../app/index';
import { authExistMiddleware } from '../../../utils/auth.util';

import {
  createStoryValidateController,
  createStoryServiceController,
} from './story-create.controller';
import {
  deleteStoryValidateController,
  deleteStoryServiceController,
} from './story-delete.controller';
import { getStoryListServiceController } from './story-list.controller';
import {
  updateStoryValidateController,
  updateStoryServiceController,
} from './story-update.controller';

const prefix = '/v1/story';

export const registerStoryApiRoutes = () => {
  app.get(`${prefix}/list`, authExistMiddleware, getStoryListServiceController);
  app.post(
    `${prefix}/create`,
    authExistMiddleware,
    createStoryValidateController,
    createStoryServiceController
  );
  app.put(
    `${prefix}/:storyId/update`,
    authExistMiddleware,
    updateStoryValidateController,
    updateStoryServiceController
  );
  app.delete(
    `${prefix}/:storyId/delete`,
    authExistMiddleware,
    deleteStoryValidateController,
    deleteStoryServiceController
  );
};
