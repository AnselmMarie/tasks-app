import { taskTable } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { taskDeleteOne } from './task.repository';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteTaskService = async ({ params }: any) => {
  const dataTask: any = await taskDeleteOne({
    where: { id: taskTable?.id, val: params?.taskId },
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return dataTask;
};

export { deleteTaskService };
