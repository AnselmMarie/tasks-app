import UiSkeleton from './skeleton.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiSkeleton> = {
  component: UiSkeleton,
  title: 'Ui/READY/Skeleton',
  args: {
    count: 1,
    width: '100%',
    height: '15px',
    circle: false,
  },
  argTypes: {
    count: {
      description:
        'Add up to 5 skelton loading lines. If the circle prop is true then the count will always be 1.',
    },
    width: {
      description: 'Determine the width of the loading by a px or %.',
    },
    height: {
      description: 'The height of each line or circle is determined by px.',
    },
    circle: {
      description: 'When true the skelton loading becomes a circle.',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
