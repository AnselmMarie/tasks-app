import { GenericNonReturnType } from '@tasks-app/models';
import { ButtonProps as ButtonPropsT } from 'tamagui';

export interface ButtonDialogViewProps extends ButtonPropsT {
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress: GenericNonReturnType;
}
