import { taskTable } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { taskUpdateOne } from './task.repository';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateTaskCompletedService = async ({ body: data, params }: any) => {
  const dataTask = await taskUpdateOne({
    where: { id: taskTable?.id, val: params?.taskId },
    data,
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return dataTask;
};

export { updateTaskCompletedService };
