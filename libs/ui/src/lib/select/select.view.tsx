import { Fragment, ReactElement, useState } from 'react';

import { noopUtil } from '@tasks-app/utils';
import { useController, useForm } from 'react-hook-form';
import { LinearGradient } from 'react-native-svg';
import {
  Adapt,
  FontSizeTokens,
  Label,
  Select,
  Separator,
  Sheet,
  Text,
  View,
  VisuallyHidden,
  YStack,
  getFontSize,
} from 'tamagui';

import { UiIcon } from '../icon';
import { UiSkeleton } from '../skeleton';

import { SelectProps, SelectOptionProps } from './select.interface';

import './select.css';

const SelectFieldView = ({
  control,
  name = '',
  label = '',
  errorMessage = null,
  defaultValue = '',
  helper = null,
  selectOption = [],
  isNative = false,
  isDisabled = false,
  isLoading = false,
  isRequired = false,
  isHidden = false,
  onClick = () => {
    noopUtil();
  },
}: SelectProps): ReactElement => {
  const { control: internalControl } = useForm();
  const currentControl = control || internalControl;

  const { field } = useController({
    control: currentControl,
    defaultValue,
    name,
  });
  const [refresh, setRefresh] = useState(false);
  let newLabel = label;

  if (isRequired) {
    if (label) {
      newLabel = `${label}*`;
    }
  }

  const initClick = (val: string) => {
    if (onClick) {
      onClick(val);
    }
    if (field) {
      field?.onChange(val);
      setRefresh(!refresh);
    }
  };

  function SelectField() {
    return (
      <View position="relative">
        {isDisabled ? (
          <View flex={1} width="100%" height="100%" zIndex={1} position="absolute" />
        ) : null}
        <Label>{newLabel}</Label>
        <View marginBottom={helper || errorMessage ? '$2' : '$5'}>
          <Select
            value={field?.value}
            disablePreventBodyScroll
            onValueChange={initClick}
            {...props}
          >
            <Select.Trigger
              backgroundColor={isDisabled ? '$gray8' : undefined}
              iconAfter={<UiIcon name="IconChevronDown" size="$1" marginRight={-3} />}
            >
              <Select.Value />
            </Select.Trigger>

            <Adapt when="sm" platform="touch">
              <Sheet
                native={!!isNative}
                modal
                dismissOnSnapToBottom
                animationConfig={{
                  type: 'spring',
                  damping: 20,
                  mass: 1.2,
                  stiffness: 250,
                }}
              >
                <Sheet.Frame>
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
                <Sheet.Overlay
                  animation="lazy"
                  enterStyle={{ opacity: 0 }}
                  exitStyle={{ opacity: 0 }}
                />
              </Sheet>
            </Adapt>

            <Select.Content zIndex={200000}>
              <Select.ScrollUpButton
                alignItems="center"
                justifyContent="center"
                position="relative"
                width="100%"
                height="$3"
              >
                <YStack zIndex={10}>
                  <UiIcon name="IconChevronUp" size="$2" />
                </YStack>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  fullscreen
                  colors={['$background', 'transparent']}
                  borderRadius="$4"
                />
              </Select.ScrollUpButton>

              <Select.Viewport
                // to do animations:
                // animation="quick"
                // animateOnly={['transform', 'opacity']}
                // enterStyle={{ o: 0, y: -10 }}
                // exitStyle={{ o: 0, y: 10 }}
                minWidth={200}
              >
                <Select.Group>
                  <Select.Label>{newLabel}</Select.Label>
                  {selectOption.map((item: SelectOptionProps, i: number): ReactElement => {
                    return (
                      <Fragment key={item.value}>
                        <Select.Item
                          paddingTop="$4"
                          paddingBottom="$4"
                          index={i}
                          value={item?.value}
                        >
                          <Select.ItemText>{item.label}</Select.ItemText>
                          <Select.ItemIndicator marginLeft="auto">
                            <UiIcon name="IconCheck" size="$1" />
                          </Select.ItemIndicator>
                        </Select.Item>
                        {i !== selectOption.length - 1 ? <Separator /> : null}
                      </Fragment>
                    );
                  })}
                </Select.Group>
                {/* Native gets an extra icon */}
                {isNative && (
                  <YStack
                    position="absolute"
                    right={0}
                    top={0}
                    bottom={0}
                    alignItems="center"
                    justifyContent="center"
                    width={'$4'}
                    pointerEvents="none"
                  >
                    <UiIcon
                      name="IconChevronUp"
                      size={getFontSize((props.size as FontSizeTokens) ?? '$true')}
                    />
                  </YStack>
                )}
              </Select.Viewport>

              <Select.ScrollDownButton
                alignItems="center"
                justifyContent="center"
                position="relative"
                width="100%"
                height="$3"
              >
                <YStack zIndex={10}>
                  <UiIcon name="IconChevronUp" size="$2" />
                </YStack>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  fullscreen
                  colors={['transparent', '$background']}
                  borderRadius="$4"
                />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select>
        </View>
        {helper ? <Text marginBottom={errorMessage ? '$2' : '$3'}>{helper}</Text> : null}
        {errorMessage ? (
          <Text marginBottom="$3" color="$red9">
            {errorMessage}
          </Text>
        ) : null}
      </View>
    );
  }

  if (isLoading) {
    return <UiSkeleton height="56px" />;
  }

  if (isHidden) {
    return <VisuallyHidden>{SelectField()}</VisuallyHidden>;
  }

  return SelectField();
};

export default SelectFieldView;
