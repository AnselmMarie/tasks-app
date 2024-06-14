// import type { Meta } from '@storybook/react';

// import UiButton from './button.view';
// import {
//   ButtonColorTypeEnum,
//   ButtonExpandTypeEnum,
//   ButtonFillTypeEnum,
//   ButtonFormTypeEnum,
//   ButtonRouterDirectionTypeEnum,
//   ButtonShapeTypeEnum,
//   ButtonSizeTypeEnum,
// } from './button.enum';

// const Story: Meta<typeof UiButton> = {
//   component: UiButton,
//   title: 'Ui/READY/Button',
//   args: {
//     id: '',
//     color: ButtonColorTypeEnum.PRIMARY,
//     size: ButtonSizeTypeEnum.DEFAULT,
//     fill: ButtonFillTypeEnum.SOLID,
//     type: ButtonFormTypeEnum.BUTTON,
//     routerDirection: ButtonRouterDirectionTypeEnum.FORWARD,
//     isDisabled: false,
//     children: 'Button',
//     expand: ButtonExpandTypeEnum.FULL,
//   },
//   argTypes: {
//     id: {
//       description: 'Add a "id" attr for the page wrapper.',
//     },
//     size: {
//       description: 'The size of the button.',
//       control: 'select',
//       options: ButtonSizeTypeEnum,
//     },
//     color: {
//       description: 'The color of the button.',
//       control: 'select',
//       options: ButtonColorTypeEnum,
//     },
//     children: {
//       description: 'The contents of the button.',
//     },
//     fill: {
//       description: 'Determines the look of the fill style.',
//       control: 'select',
//       options: ButtonFillTypeEnum,
//     },
//     type: {
//       description: 'Represents the type of button it is.',
//       control: 'select',
//       options: ButtonFormTypeEnum,
//     },
//     routerDirection: {
//       description:
//         'When the "routerLink" is being used then this helps the router know the direction of the animation.',
//       control: 'select',
//       options: ButtonRouterDirectionTypeEnum,
//     },
//     routerLink: {
//       description:
//         'Determines the next page the user will go when the button is clicked.',
//     },
//     shape: {
//       description:
//         'Determines the next page the user will go when the button is clicked.',
//       control: 'check',
//       options: ButtonShapeTypeEnum,
//     },
//     expand: {
//       description: 'Select if the button is a inline-block or a block.',
//       control: 'select',
//       options: ButtonExpandTypeEnum,
//     },
//     isDisabled: {
//       description: 'The button will not be clickable.',
//     },
//     onClick: {
//       description: 'The button will not be clickable.',
//       action: 'Button was clicked',
//     },
//   },
// };
// export default Story;

// export const PrimaryButton = {
//   render: (args: any) => <UiButton {...args} />,
//   args: {
//     color: ButtonColorTypeEnum.PRIMARY,
//   },
// };

// export const ModifyButton = {
//   render: (args: any) => <UiButton {...args} />,
//   args: {
//     color: ButtonColorTypeEnum.DANGER,
//   },
// };
