import { ViewProps } from 'tamagui';

export interface IconProps extends ViewProps {
  name: string;
  isButton: string;
  replaceIconColor: string | null;
}
