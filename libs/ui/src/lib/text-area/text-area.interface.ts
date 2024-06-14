import { GenericNonReturnType } from '@tasks-app/models';
import { Control } from 'react-hook-form';

export interface InputProps {
  name?: string;
  label: string;
  helper?: string | null;
  errorMessage?: string | null;
  control?: Control;
  value?: string;
  isLoading?: boolean;
  isReadyOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isPassword?: boolean;
  isHidden?: boolean;
  onChange?: GenericNonReturnType;
}
