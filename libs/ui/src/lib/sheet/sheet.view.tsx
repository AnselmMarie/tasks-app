import { PropsWithChildren, ReactElement, useState } from 'react';

// import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { Sheet, SheetProps as SheetPropsT } from '@tamagui/sheet';
import { SafeAreaView } from 'react-native';
import { H2, Paragraph, View, YStack } from 'tamagui';

import { UiButton } from '../button';
import { UiIcon } from '../icon';

import { SheetSnapModeEnum, SheetTypeEnum } from './sheet.enum';
import { SheetModalProps } from './sheet.interface';

function InnerSheet(props: SheetPropsT) {
  return (
    <Sheet animation="medium" modal snapPoints={[90]} {...props}>
      <Sheet.Overlay animation="medium" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />

      {/* <Sheet.Handle /> */}

      <Sheet.Frame flex={1} justifyContent="center" alignItems="center" space="$5">
        <Sheet.ScrollView>
          <YStack padding="$5" gap="$8">
            <UiButton
              size="$6"
              circular
              alignSelf="center"
              // icon={ChevronDown}
              onPress={() => props.onOpenChange?.(false)}
            />

            <H2>Hello world</H2>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Paragraph key={i} size="$8">
                Eu officia sunt ipsum nisi dolore labore est laborum laborum in esse ad pariatur.
                Dolor excepteur esse deserunt voluptate labore ea. Exercitation ipsum deserunt
                occaecat cupidatat consequat est adipisicing velit cupidatat ullamco veniam aliquip
                reprehenderit officia. Officia labore culpa ullamco velit. In sit occaecat velit
                ipsum fugiat esse aliqua dolor sint.
              </Paragraph>
            ))}
          </YStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}

const SheetView = ({
  openModal = false,
  sheetType = SheetTypeEnum.INLINE,
  snapMode = SheetSnapModeEnum.FIT,
  fullModal = false,
  hideSheetX = false,
  children,
  onModalChange,
}: PropsWithChildren<SheetModalProps>): ReactElement => {
  const [position, setPosition] = useState(0);
  const [innerOpen, setInnerOpen] = useState(false);
  const isPercent = snapMode === SheetSnapModeEnum.PERCENT;
  const isConstant = snapMode === SheetSnapModeEnum.CONSTANT;
  const isFit = snapMode === SheetSnapModeEnum.FIT;
  // const isMixed = snapMode === SheetSnapModeEnum.MIXED;

  const snapPoints = fullModal
    ? [100]
    : isPercent
    ? [85, 50, 25]
    : isConstant
    ? [256, 190]
    : isFit
    ? undefined
    : ['80%', 256, 190];

  return (
    <Sheet
      forceRemoveScrollEnabled={openModal}
      modal={sheetType === 'modal'}
      open={openModal}
      snapPoints={snapPoints}
      snapPointsMode={fullModal ? undefined : snapMode}
      position={position}
      zIndex={100_000}
      animation="medium"
      dismissOnSnapToBottom
      // onOpenChange={onModalChange}
      onPositionChange={setPosition}
    >
      <Sheet.Overlay onPress={() => onModalChange(false)} />
      {/* <Sheet.Handle /> */}

      <Sheet.Frame backgroundColor={fullModal ? 'black' : undefined}>
        <SafeAreaView>
          <View position="relative">
            {!hideSheetX ? (
              <View
                zIndex="$3"
                paddingTop="$3"
                marginRight="$3"
                top={0}
                right={0}
                position={fullModal ? 'absolute' : 'relative'}
                flexDirection="row"
                justifyContent="flex-end"
              >
                <UiIcon
                  name="IconX"
                  size="$2"
                  backgroundColor={fullModal ? 'black' : undefined}
                  replaceIconColor={fullModal ? 'white' : ''}
                  onPress={() => {
                    onModalChange(false);
                  }}
                />
              </View>
            ) : null}
            {children}
          </View>
        </SafeAreaView>

        {sheetType === 'modal' && isPercent && (
          <>
            <InnerSheet open={innerOpen} onOpenChange={setInnerOpen} />

            <UiButton size="$6" circular onPress={() => setInnerOpen(true)} />
            {/* <UiButton size="$6" circular icon={ChevronUp} onPress={() => setInnerOpen(true)} /> */}
          </>
        )}
      </Sheet.Frame>
    </Sheet>
  );
};

export default SheetView;
