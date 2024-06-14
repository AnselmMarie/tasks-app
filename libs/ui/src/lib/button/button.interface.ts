import { GenericNonReturnType } from '@tasks-app/models';
import { ButtonProps as ButtonPropsT } from 'tamagui';

import {
  ButtonColorTypeEnum,
  ButtonExpandTypeEnum,
  ButtonFillTypeEnum,
  ButtonShapeTypeEnum,
} from './button.enum';

export interface ButtonProps extends ButtonPropsT {
  isLoading?: boolean;
  color?: ButtonColorTypeEnum;
  expand?: ButtonExpandTypeEnum;
  fill?: ButtonFillTypeEnum;
  shape?: ButtonShapeTypeEnum;
  isDisabled?: boolean;
  onClick?: GenericNonReturnType;
}
