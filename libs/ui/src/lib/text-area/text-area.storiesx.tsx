// import type { Meta } from '@storybook/react';

// import { InputTypeEnum } from './text-area.enum';
// import UiInput from './text-area.view';

// const Story: Meta<typeof UiInput> = {
//   component: UiInput,
//   title: 'Ui/READY/Input',
//   args: {
//     name: '',
//     type: InputTypeEnum.TEXT,
//     label: 'Input Label',
//     helper: 'Helper Text',
//     error: null,
//     errorMessage: '',
//     isLoading: false,
//     isDisabled: false,
//     isRequired: false,
//     isHidden: false,
//     // defaultValue: 'ffff',
//     // register: () => {},
//   },
//   argTypes: {
//     name: {
//       description:
//         'This represents the name attr and is used for the react hooks form functionality.',
//     },
//     type: {
//       control: 'select',
//       options: InputTypeEnum,
//       description:
//         'Choose from a set of options that will change what content can be entered in the input field.',
//     },
//     label: {
//       description: `Let's the user know what the input field represent.`,
//     },
//     helper: {
//       description:
//         'This content under the field can help the user understand more about the field.',
//     },
//     error: {
//       description:
//         '**decrepit** A way to display the error message but the developer needs to send the whole error object.',
//     },
//     errorMessage: {
//       description: 'Displays the current field error message.',
//     },
//     isLoading: {
//       description: 'The input field changes to a loading bar.',
//     },
//     isDisabled: {
//       description: 'The input field is not editable in this state.',
//     },
//     isRequired: {
//       description:
//         'An asterisk will appear to let the user known the field must be filled out.',
//     },
//     isHidden: {
//       description: 'The field will be hidden.',
//     },
//     register: {
//       description:
//         'This prop is required for the react hooks form functionality.',
//     },
//   },
// };
// export default Story;

// export const Primary = {
//   render: (args: any) => <UiInput {...args} />,
// };
