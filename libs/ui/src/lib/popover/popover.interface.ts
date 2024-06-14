import { PopoverProps as TPopoverProps } from 'tamagui';

export interface PopoverProps extends TPopoverProps {
  label?: string;
  icon?: string;
  hidePopoverX?: boolean;
}
