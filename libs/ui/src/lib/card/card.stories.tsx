import { UiCard } from '.';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiCard> = {
  component: UiCard,
  title: 'Ui/READY/Card',
  args: {
    className: 'p-base',
    children: 'Content',
  },
  argTypes: {
    children: {
      description: 'This content will be wrapped around the card.',
    },
    className: {
      description: 'Add tailwind class names here',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
