import { noopUtil } from '@tasks-app/utils';

import { SelectInterfaceEnum } from './select.enum';
import UiSelect from './select.view';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof UiSelect> = {
  component: UiSelect,
  title: 'Ui/READY/Select',
  args: {
    name: '',
    label: 'Select Label',
    error: null,
    selectOption: [
      { label: 'Label 1', value: 'VALUE1' },
      { label: 'Label 2', value: 'VALUE2' },
      { label: 'Label 3', value: 'VALUE3' },
    ],
    value: '',
    interfaceType: SelectInterfaceEnum.ACTIONSHEET,
    isRequired: false,
    isLoading: false,
    isHidden: false,
    isDisabled: false,
    register: () => {
      noopUtil();
    },
  },
  argTypes: {
    name: {
      description:
        'This represents the name attr and is used for the react hooks form functionality.',
    },
    interfaceType: {
      control: 'select',
      options: SelectInterfaceEnum,
      description:
        'Choose from a set of options that will change what content can be entered in the input field.',
    },
    label: {
      description: `Let's the user know what the field represent.`,
    },
    // error: {
    //   description:
    //     '**decrepit** A way to display the error message but the developer needs to send the whole error object.',
    // },
    // errorMessage: {
    //   description: 'Displays the current field error message.',
    // },
    value: {
      description: 'Can manually pass in the value from the list of current options.',
    },
    selectOption: {
      description:
        'This props will give a user the ability to select different options from field.',
    },
    isLoading: {
      description: 'The field changes to a loading bar.',
    },
    isDisabled: {
      description: 'The field is not editable in this state.',
    },
    isHidden: {
      description: 'The field will be hidden.',
    },
    isRequired: {
      description: 'An asterisk will appear to let the user known the field must be filled out.',
    },
    register: {
      description: 'This prop is required for the react hooks form functionality.',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
