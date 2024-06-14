import UiStatusBodyMessage from './status-body-message.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiStatusBodyMessage> = {
  component: UiStatusBodyMessage,
  title: 'Ui/WIP/Status Body Message',
  args: {
    display: false,
    message: 'An Error Message',
  },
};
export default Story;

export const Primary = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => <UiStatusBodyMessage {...args} />,
};
