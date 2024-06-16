import { storyTable } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { storyUpdateOne } from './story.repository';

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateStoryService = async ({ body: data, params }: any) => {
  const dataStory = await storyUpdateOne({
    where: { id: storyTable?.id, val: params?.storyId },
    data,
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return dataStory;
};
