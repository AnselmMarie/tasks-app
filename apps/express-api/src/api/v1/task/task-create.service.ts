import { generateDatabaseError } from '../../../utils/format-response.util';

import { taskCreateOne } from './task.repository';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createTaskServiceInteractor = async ({ body: data, accessTokenReq }: any) => {
  const dataTask = await taskCreateOne({ ...data, userId: String(accessTokenReq?.sub) }).catch(
    async (err) => {
      throw (await generateDatabaseError()) || err;
    }
  );

  return dataTask;
};

export { createTaskServiceInteractor };
