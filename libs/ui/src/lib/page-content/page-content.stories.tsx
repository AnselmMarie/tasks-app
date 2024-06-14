import UiPageContent from './page-content.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiPageContent> = {
  component: UiPageContent,
  title: 'Ui/WIP/Page Content',
  args: {
    header: 'Header',
    children: 'Children',
    id: '',
    hasRefresh: false,
  },
  argTypes: {
    header: {
      description:
        'This represents the name attr and is used for the react hooks form functionality.',
    },
    children: {
      description: 'The body content of the page will be present here.',
    },
    id: {
      description: 'Add a "id" attr for the page wrapper.',
    },
    hasRefresh: {
      description: 'If true the "pull to refresh" functionality is possible.',
    },
    onRefresh: {
      description:
        'Once a user does a "pull to refresh" functionality then this prop will initiated.',
      action: 'Refreshing props initiated.',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
