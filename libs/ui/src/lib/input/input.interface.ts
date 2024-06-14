import { GenericNonReturnType } from '@tasks-app/models';
import { Control } from 'react-hook-form';

import { InputKeyboardTypeEnum, InputTypeEnum } from './input.enum';

export interface InputProps {
  name?: string;
  type?: InputTypeEnum;
  label: string;
  helper?: string | null;
  errorMessage?: string | null;
  keyboard?: InputKeyboardTypeEnum;
  control?: Control | null;
  value?: string;
  prependIcon?: string;
  defaultValue?: string;
  isLoading?: boolean;
  isReadyOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isPassword?: boolean;
  isHidden?: boolean;
  onChange?: GenericNonReturnType;
}
