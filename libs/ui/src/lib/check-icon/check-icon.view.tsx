import { ReactElement } from 'react';

import { UiIcon } from '../icon';

import { CheckIconProps } from './check-icon.interface';

const CheckIconView = ({ isCompleted = false }: CheckIconProps): ReactElement => {
  return (
    <UiIcon
      name="IconCircleCheckFilled"
      size="$2"
      replaceIconColor={isCompleted ? '$green9' : 'grey'}
    />
  );
};

export default CheckIconView;
