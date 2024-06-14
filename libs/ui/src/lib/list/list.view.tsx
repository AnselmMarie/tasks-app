import { PropsWithChildren, ReactElement } from 'react';

import { YGroup } from 'tamagui';

import { ListProps } from './list.interface';

const ListView = ({
  bordered = true,
  children,
  ...props
}: PropsWithChildren<ListProps>): ReactElement => {
  return (
    <YGroup {...props} bordered={bordered || 0}>
      {children}
    </YGroup>
  );
};

export default ListView;
