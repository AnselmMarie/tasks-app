import { ReactElement } from 'react';

import { AlertDialog, XStack, YStack } from 'tamagui';

import { ButtonColorTypeEnum, UiButton } from '../button';

import { AlertDialogViewProps } from './alert.interface';

const AlertDialogView = ({
  title,
  isOpen,
  description,
  okButton = false,
  onButtonPress,
}: AlertDialogViewProps): ReactElement => {
  return (
    <AlertDialog open={isOpen} native>
      <AlertDialog.Trigger asChild>{/* <Button>Show Alert</Button> */}</AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack padding="$3">
            <AlertDialog.Title marginBottom="$2">{title}</AlertDialog.Title>
            <AlertDialog.Description marginBottom="$6">{description}</AlertDialog.Description>

            <XStack justifyContent="flex-end">
              <AlertDialog.Cancel asChild onPress={() => onButtonPress(false)}>
                <UiButton color={ButtonColorTypeEnum.SECONDARY_OUTLINE} marginRight="$4">
                  {okButton ? 'OK' : 'Cancel'}
                </UiButton>
              </AlertDialog.Cancel>
              {!okButton ? (
                <AlertDialog.Action asChild onPress={() => onButtonPress(true)}>
                  <UiButton color={ButtonColorTypeEnum.PRIMARY}>Accept</UiButton>
                </AlertDialog.Action>
              ) : null}
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
};

export default AlertDialogView;
