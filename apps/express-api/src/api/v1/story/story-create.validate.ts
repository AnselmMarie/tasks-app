import { nameValidateUtil } from '@tasks-app/utils';
import { StoryTableInter } from 'apps/express-api/src/drizzle-config';
import { z } from 'zod';

const createStorySchema = z.object({
  body: z.object({
    name: nameValidateUtil,
  }),
});

interface CreateStoryValidateProps {
  body: Partial<StoryTableInter>;
}

export const createStoryValidate = ({ body }: CreateStoryValidateProps) => {
  return createStorySchema.safeParseAsync({
    body,
  });
};
