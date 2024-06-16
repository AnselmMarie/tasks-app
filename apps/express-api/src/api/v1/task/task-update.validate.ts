import {
  idValidateNotNullableUtil,
  idValidateUtil,
  nameValidateUtil,
  numberValidateUtil,
} from '@tasks-app/utils';
import { z } from 'zod';

const updateTaskSchema = z.object({
  body: z.object({
    name: nameValidateUtil,
    buildType: z.string().max(255),
    storyId: idValidateUtil.optional(),
    amount: numberValidateUtil.optional(),
  }),
  params: z.object({
    taskId: idValidateNotNullableUtil,
  }),
});

export const updateTaskValidate = ({ body, params }: any) => {
  return updateTaskSchema.safeParseAsync({
    body,
    params,
  });
};
