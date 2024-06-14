import { Control } from 'react-hook-form';

import { DateModeEnum } from './date.enum';

export interface DateProps {
  label: string;
  errorMessage: string;
  defaultValue: string;
  minDate: Date;
  name?: string;
  helper?: string;
  mode?: DateModeEnum;
  control?: Control | null;
  maxDate?: Date | undefined;
  isDisabled?: boolean;
  isRequired?: boolean;
  isTimeCleared?: boolean;
  isEndDateTime?: boolean;
}
