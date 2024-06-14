import { ReactElement, createElement } from 'react';

import { View, useThemeName } from 'tamagui';

import { IconProps } from './icon.interface';
import { getIconsUtil } from './icon.util';

const IconView = ({
  name,
  replaceIconColor = null,
  isButton,
  ...props
}: IconProps): ReactElement => {
  const themeName = useThemeName();
  const iconName = getIconsUtil(name);

  if (props.backgroundColor) {
    return (
      <View
        backgroundColor={props.backgroundColor}
        marginBottom={props.marginBottom}
        borderRadius="$circle"
        padding={props.padding || '$2'}
        onPress={props.onPress}
      >
        {createElement(
          iconName,
          {
            ...props,
            onPress: undefined,
            marginBottom: '$0',
            color: replaceIconColor
              ? replaceIconColor
              : themeName.includes('dark')
              ? 'white'
              : 'black',
          },
          null
        )}
      </View>
    );
  }

  return createElement(
    iconName,
    {
      ...props,
      color: replaceIconColor ? replaceIconColor : themeName.includes('dark') ? 'white' : 'black',
    },
    null
  );
};

export default IconView;
