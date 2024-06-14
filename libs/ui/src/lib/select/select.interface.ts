import { GenericNonReturnType } from '@tasks-app/models';
import { Control, FieldError } from 'react-hook-form';
import { SelectProps as TSelectProps } from 'tamagui';

export interface SelectOptionProps {
  label: string;
  value: string;
}

export interface SelectProps extends TSelectProps {
  control?: Control;
  name?: string;
  label: string;
  error?: FieldError | null;
  errorMessage?: string | null;
  defaultValue?: string;
  helper?: string | null;
  selectOption: ReadonlyArray<SelectOptionProps>;
  isNative?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRequired?: boolean;
  isHidden?: boolean;
  onClick?: GenericNonReturnType;
}
