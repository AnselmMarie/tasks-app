import { PropsWithChildren, ReactElement, useState } from 'react';

import { GestureResponderEvent } from 'react-native';

import { UiAlert } from '../alert';
import { ButtonColorTypeEnum, UiButton } from '../button';

import { ButtonDialogViewProps } from './button-dialog.interface';

let eventData: GestureResponderEvent | null;

const ButtonDialogView = ({
  isLoading = false,
  isDisabled = false,
  children,
  onPress,
  ...props
}: PropsWithChildren<ButtonDialogViewProps>): ReactElement => {
  const [openAlert, setOpenAlert] = useState<boolean | null>(null);

  const initGoClick = (event: GestureResponderEvent) => {
    setOpenAlert(!openAlert);
    eventData = event;
  };

  const buttonPress = (data: boolean) => {
    setOpenAlert(false);
    if (data) {
      onPress(eventData);
    }
    eventData = null;
  };

  return (
    <>
      <UiButton {...props} color={ButtonColorTypeEnum.DANGER} chromeless onPress={initGoClick}>
        {children}
      </UiButton>
      <UiAlert
        title="Delete Item"
        description="Are you sure you want to delete this item? This action can't be undone."
        isOpen={openAlert}
        onButtonPress={buttonPress}
      />
    </>
  );
};
export default ButtonDialogView;
