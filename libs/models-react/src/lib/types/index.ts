import { ReactElement } from 'react';

import { GenericUnknownType } from '@tasks-app/models';

export type GenericElementReturnType = (
  ...params: ReadonlyArray<GenericUnknownType>
) => ReactElement;
