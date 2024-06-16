import { idValidateNotNullableUtil } from '@tasks-app/utils';
import { z } from 'zod';

const updateStorySchema = z.object({
  params: z.object({
    storyId: idValidateNotNullableUtil,
  }),
});
// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteStoryValidate = ({ params }: any) => {
  return updateStorySchema.safeParseAsync({
    params,
  });
};
