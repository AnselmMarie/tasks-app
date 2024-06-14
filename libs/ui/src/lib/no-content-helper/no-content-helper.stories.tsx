import UiNoContentHelper from './no-content-helper.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiNoContentHelper> = {
  component: UiNoContentHelper,
  title: 'Ui/WIP/No Content Helper',
  args: {
    helperData: [
      {
        description: 'description content',
      },
      {
        icon: 'add',
        helper: 'Helper test content',
      },
      {
        icon: 'add',
        helper: 'Helper test content',
      },
    ],
  },
};
export default Story;

export const Primary = {
  args: {},
};
