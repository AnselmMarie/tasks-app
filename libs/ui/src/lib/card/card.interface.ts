import { ReactElement } from 'react';

import { CardProps as CardPropsT } from 'tamagui';

export interface CardProps extends CardPropsT {
  header?: ReactElement | null;
  footer?: ReactElement | null;
  background?: ReactElement | null;
}
