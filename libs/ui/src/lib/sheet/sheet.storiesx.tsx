import UiTemplate from './sheet.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiTemplate> = {
  component: UiTemplate,
  title: 'Template',
};
export default Story;

export const Primary = {
  args: {},
};
