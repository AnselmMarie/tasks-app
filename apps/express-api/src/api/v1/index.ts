import { registerAuthApiRoutes } from './auth/auth.route';
// import { registerStoryApiRoutes } from './story/story.route';
// import { registerTaskApiRoutes } from './task/task.route';
import { registerUserApiRoutes } from './user/user.route';

export const loadRoutes = () => {
  registerUserApiRoutes();
  // registerStoryApiRoutes();
  // registerTaskApiRoutes();
  registerAuthApiRoutes();
};
