import { idValidateNotNullableUtil } from '@tasks-app/utils';
import { z } from 'zod';

const deleteTaskSchema = z.object({
  params: z.object({
    taskId: idValidateNotNullableUtil,
  }),
});
// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteTaskValidate = ({ params }: any) => {
  return deleteTaskSchema.safeParseAsync({
    params,
  });
};
