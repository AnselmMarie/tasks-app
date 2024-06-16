import { StoryTableInter } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { storyCreateOne } from './story.repository';

interface CreateStoryServiceProps {
  body: StoryTableInter;
  // @todo need to figure out the jwt typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  accessTokenReq: any;
}

const createStoryService = async ({ body: data, accessTokenReq }: CreateStoryServiceProps) => {
  const dataStory = await storyCreateOne({ ...data, userId: String(accessTokenReq?.sub) }).catch(
    async (err) => {
      throw (await generateDatabaseError()) || err;
    }
  );

  return dataStory;
};

export { createStoryService };
