import { app } from '../../../app/index';
import { authExistMiddleware } from '../../../utils/auth.util';

import {
  updateTaskCompletedValidateController,
  taskUpdateCompletedServiceController,
} from './task-completed.controller';
import {
  createTaskValidateController,
  taskCreateServiceController,
} from './task-create.controller';
import {
  deleteTaskValidateController,
  deleteUpdateServiceController,
} from './task-delete.controller';
import { getTaskListServiceController } from './task-list.controller';
import {
  updateTaskValidateController,
  updateTaskServiceController,
} from './task-update.controller';

const prefix = '/v1/task';

export const registerTaskApiRoutes = () => {
  app.get(`${prefix}/list`, authExistMiddleware, getTaskListServiceController);
  app.post(
    `${prefix}/create`,
    authExistMiddleware,
    createTaskValidateController,
    taskCreateServiceController
  );
  app.put(
    `${prefix}/:taskId/update`,
    authExistMiddleware,
    updateTaskValidateController,
    updateTaskServiceController
  );
  app.put(
    `${prefix}/:taskId/completed`,
    authExistMiddleware,
    updateTaskCompletedValidateController,
    taskUpdateCompletedServiceController
  );
  app.delete(
    `${prefix}/:taskId/delete`,
    authExistMiddleware,
    deleteTaskValidateController,
    deleteUpdateServiceController
  );
};
