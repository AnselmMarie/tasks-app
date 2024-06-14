import { PropsWithChildren, ReactElement } from 'react';

import { Adapt, Popover, Text, View, YStack } from 'tamagui';

import { UiButton } from '../button';
import { UiIcon } from '../icon';

import { PopoverProps } from './popover.interface';

const PopoverView = ({
  label = 'Select An Option',
  icon = 'IconChevronDown',
  hidePopoverX = false,
  children,
  ...props
}: PropsWithChildren<PopoverProps>): ReactElement => {
  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <UiButton width="$2" icon={<UiIcon name={icon} size="$1" />} chromeless="all" />
      </Popover.Trigger>

      <Adapt when="sm" platform="touch">
        <Popover.Sheet modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame>
            <Adapt.Contents />
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack>
          <View
            width="100%"
            padding="$4"
            backgroundColor="$color4"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <Text fontWeight="bold" fontSize="$3" theme="default">
              {label}
            </Text>
            {!hidePopoverX ? (
              <Popover.Close asChild>
                <UiButton size="$1" icon={<UiIcon name="IconX" size="$1" />} chromeless="all" />
              </Popover.Close>
            ) : null}
          </View>
          {children}
        </YStack>
      </Popover.Content>
    </Popover>
  );
};

export default PopoverView;
