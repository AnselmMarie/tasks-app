import { taskTable } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { taskFindMany } from './task.repository';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTaskListService = async ({ accessTokenReq }: any) => {
  const dataTask = await taskFindMany({
    where: { id: taskTable?.userId, val: accessTokenReq?.sub },
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return dataTask;
};

export { getTaskListService };
