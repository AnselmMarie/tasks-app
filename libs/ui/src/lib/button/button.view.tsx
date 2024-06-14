import { PropsWithChildren, ReactElement } from 'react';

import { Button, Theme } from 'tamagui';

import { ButtonColorTypeEnum, ButtonFillTypeEnum } from './button.enum';
import { ButtonProps } from './button.interface';

const ButtonView = ({
  isLoading = false,
  color = ButtonColorTypeEnum.PRIMARY,
  fill = ButtonFillTypeEnum.SOLID,
  isDisabled = false,
  theme = 'primary',
  children,
  ...props
}: PropsWithChildren<ButtonProps>): ReactElement => {
  let textColor = undefined;
  let backgroundColor = '';
  let finalVariant = false;
  let borderColor = undefined;
  let pressStyle = undefined;
  let newTheme = theme;

  if (fill === ButtonFillTypeEnum.CLEAR_NO_UPPERCASE) {
    fill = ButtonFillTypeEnum.CLEAR;
  }

  if (color === ButtonColorTypeEnum.PRIMARY) {
    textColor = 'white';
    backgroundColor = !props?.chromeless ? '$color7' : '';
  } else if (color === ButtonColorTypeEnum.PRIMARY_OUTLINE) {
    finalVariant = true;
    borderColor = '$color8';
    textColor = '$color9';
    backgroundColor = !props?.chromeless ? 'white' : '';
  } else if (color === ButtonColorTypeEnum.SECONDARY) {
    textColor = 'black';
    backgroundColor = !props?.chromeless ? '$color1' : '';
  } else if (color === ButtonColorTypeEnum.SECONDARY_OUTLINE) {
    // textColor = 'black';
    borderColor = 'lightslategrey';
    backgroundColor = !props?.chromeless ? 'transparent' : '';
    pressStyle = { backgroundColor: 'lightgrey', borderColor: 'lightslategrey' };
  } else if (color === ButtonColorTypeEnum.WHITE) {
    textColor = 'black';
    backgroundColor = !props?.chromeless ? 'white' : '';
    pressStyle = { backgroundColor: 'lightgrey', borderColor: 'lightslategrey' };
  } else if (color === ButtonColorTypeEnum.DANGER) {
    newTheme = 'red';
    textColor = 'white';
    backgroundColor = '$red9';
  }

  if (isDisabled) {
    textColor = 'white';
    backgroundColor = '$gray9';
  }

  if (isDisabled && color === ButtonColorTypeEnum.PRIMARY_OUTLINE) {
    borderColor = 'transparent';
  }

  return (
    <Theme name={newTheme}>
      <Button
        {...props}
        color={textColor}
        variant={finalVariant ? 'outlined' : undefined}
        borderColor={borderColor}
        pressStyle={pressStyle}
        backgroundColor={backgroundColor}
        disabled={isDisabled}
        chromeless={props.chromeless}
        onPress={props.onPress}
      >
        {children}
      </Button>
    </Theme>
  );
};
export default ButtonView;
