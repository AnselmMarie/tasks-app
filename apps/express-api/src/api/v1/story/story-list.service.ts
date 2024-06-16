import { storyTable } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { storyFindMany } from './story.repository';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStoryListService = async ({ accessTokenReq }: any) => {
  const userId = accessTokenReq?.sub;

  const dataStory = await storyFindMany({
    where: { id: storyTable?.userId, val: userId },
    // @todo need to figure out the how to add the task relations
    // with: {
    //   task: true,
    // },
  }).catch(async (err: Error) => {
    console.log('err', err);
    throw (await generateDatabaseError()) || err;
  });

  return dataStory;
};

export { getStoryListService };
