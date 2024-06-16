import { storyTable } from 'apps/express-api/src/drizzle-config';

import { generateDatabaseError } from '../../../utils/format-response.util';

import { storyDeleteOne } from './story.repository';

// interface DeleteStoryServiceProps {
//   storyId: string;
// }

// @todo need to figure out the jwt typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteStoryService = async (params: any) => {
  const dataStory = await storyDeleteOne({
    where: { id: storyTable?.id, val: params?.storyId },
  }).catch(async (err) => {
    throw (await generateDatabaseError()) || err;
  });

  return dataStory;
};

export { deleteStoryService };
