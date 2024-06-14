// import { InputTypeEnum } from './error-body-message.enum';

import { FieldError } from 'react-hook-form';

import { StatusBodyTypeEnum } from './status-body-message.enum';

export interface StatusBodyMessageProps {
  display?: boolean;
  error?: FieldError | null;
  message: string[] | string;
  status?: StatusBodyTypeEnum;
}
