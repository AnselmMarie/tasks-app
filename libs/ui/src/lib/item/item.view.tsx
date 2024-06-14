import { PropsWithChildren, ReactElement } from 'react';

import { IconChevronRight } from '@tamagui-icons/icon-tabler';
import { ListItem, Separator, View } from 'tamagui';

import { ItemProps } from './item.interface';

const ItemView = ({
  isLoading = false,
  children,
  displayHr,
  onClick = null,
  ...props
}: PropsWithChildren<ItemProps>): ReactElement => {
  return (
    <View position="relative">
      {isLoading ? (
        <View zIndex="$1" position="absolute" top={0} left={0} width="100%" height="100%"></View>
      ) : null}
      <ListItem
        {...props}
        hoverTheme={!!onClick}
        pressTheme={!!onClick}
        onPress={onClick}
        iconAfter={onClick ? IconChevronRight : null}
      >
        {children}
      </ListItem>
      {displayHr ? <Separator /> : null}
    </View>
  );
};

export default ItemView;
