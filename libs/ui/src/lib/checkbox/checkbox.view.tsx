import { ReactElement, useId } from 'react';

import { GenericNonReturnType } from '@tasks-app/models';
import { useController, Control, useForm } from 'react-hook-form';
import { Checkbox, Label, Text, View, XStack } from 'tamagui';

import { UiIcon } from '../icon';

interface CheckboxViewProps {
  name: string;
  label: string;
  helper: string;
  errorMessage: string;
  defaultValue: boolean;
  isDisabled: boolean;
  control?: Control | null;
  onChange: GenericNonReturnType | null;
}

const CheckboxView = ({
  name,
  label,
  helper,
  errorMessage,
  defaultValue,
  isDisabled,
  control = null,
  onChange = null,
  ...props
}: CheckboxViewProps): ReactElement => {
  const id = `checkbox-${useId()}`;

  const { control: internalControl } = useForm();
  const currentControl = control || internalControl;

  const { field } = useController({
    control: currentControl,
    defaultValue,
    name,
  });

  const changeFn = () => {
    field?.onChange();
    if (onChange) onChange();
  };

  return (
    <View position="relative">
      {isDisabled ? (
        <View flex={1} width="100%" height="100%" zIndex={1} position="absolute" />
      ) : null}
      <XStack gap="$2" alignItems="center" marginBottom={helper || errorMessage ? '$2' : '$5'}>
        <Checkbox
          {...props}
          id={id}
          size="$5"
          backgroundColor={isDisabled ? '$gray8' : undefined}
          defaultChecked={field?.value}
          onCheckedChange={changeFn}
        >
          <Checkbox.Indicator>
            <UiIcon name="IconCheck" />
          </Checkbox.Indicator>
        </Checkbox>

        <Label marginLeft="$1">{label}</Label>
      </XStack>
      {helper ? <Text marginBottom={errorMessage ? '$2' : '$3'}>{helper}</Text> : null}
      {errorMessage ? (
        <Text marginBottom="$3" color="$red9">
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default CheckboxView;
