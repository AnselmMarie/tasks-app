import { idValidateNotNullableUtil } from '@tasks-app/utils';
import { z } from 'zod';

const updateTaskSchema = z.object({
  body: z.object({
    isCompleted: z.boolean(),
  }),
  params: z.object({
    taskId: idValidateNotNullableUtil,
  }),
});

// interface UpdateTaskCompletedValidateProps {
//   body: {
//     isCompleted: boolean;
//   };
//   params: { taskId: string };
// }

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateTaskCompletedValidate = ({ body, params }: any) => {
  return updateTaskSchema.safeParseAsync({
    body,
    params,
  });
};
