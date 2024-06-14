import UiItem from './item.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiItem> = {
  component: UiItem,
  title: 'Ui/WIP/Item',
  args: {
    children: 'Content',
    onClick: () => alert('Item Clicked'),
  },
};
export default Story;

export const Primary = {
  args: {},
};
