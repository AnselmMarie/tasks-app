import {
  descriptionSmValidateUtil,
  idValidateNotNullableUtil,
  nameValidateUtil,
} from '@tasks-app/utils';
import { z } from 'zod';

const updateStorySchema = z.object({
  body: z.object({
    name: nameValidateUtil,
    description: descriptionSmValidateUtil.optional(),
  }),
  params: z.object({
    storyId: idValidateNotNullableUtil,
  }),
});

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateStoryValidate = ({ body, params }: any) => {
  return updateStorySchema.safeParseAsync({
    body,
    params,
  });
};
