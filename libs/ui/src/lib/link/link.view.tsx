import { PropsWithChildren, ReactElement } from 'react';

import { Text } from 'tamagui';

import { LinkProps } from './link.interface';

const LinkView = ({
  isDisabled = false,
  color = '$primary9',
  children,
  ...props
}: PropsWithChildren<LinkProps>): ReactElement => {
  if (isDisabled) {
    return (
      <Text {...props} color="lightgrey" onPress={() => undefined}>
        {children}
      </Text>
    );
  }

  return (
    <Text {...props} fontWeight="bold" color={color}>
      {children}
    </Text>
  );
};

export default LinkView;
