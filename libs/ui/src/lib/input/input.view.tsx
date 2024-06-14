import { ReactElement, useId } from 'react';

import { useController, useForm } from 'react-hook-form';
import { View, VisuallyHidden, Input, Text, Label } from 'tamagui';

// import { UiSkeleton } from '../skeleton';

import { InputKeyboardTypeEnum, InputTypeEnum } from './input.enum';
import { InputProps } from './input.interface';

const InputView = (props: InputProps): ReactElement => {
  const {
    name = '',
    type = InputTypeEnum.TEXT,
    keyboard = InputKeyboardTypeEnum.DEFAULT,
    label,
    helper = null,
    control = null,
    errorMessage = null,
    // prependIcon = '',
    defaultValue = '',
    // isLoading = false,
    isDisabled = false,
    isRequired = false,
    isHidden = false,
    isReadyOnly = false,
    isPassword = false,
  } = props;
  const id = `${name}${useId()}`;
  // const InputIconClass = prependIcon ? 'input-has-prepend-icon' : '';
  const { control: internalControl } = useForm();
  const currentControl = control || internalControl;

  const { field } = useController({
    control: currentControl,
    defaultValue,
    name,
  });

  function InputField(): ReactElement {
    return (
      <View position="relative">
        {isDisabled ? (
          <View flex={1} width="100%" height="100%" zIndex={1} position="absolute" />
        ) : null}
        <Label htmlFor={id}>{!isRequired ? label : `${label}*`}</Label>
        <Input
          id={id}
          secureTextEntry={isPassword}
          inputMode={type}
          keyboardType={keyboard}
          disabled={isDisabled}
          value={field?.value}
          readOnly={isReadyOnly}
          autoCorrect={!isPassword}
          marginBottom={helper || errorMessage ? '$2' : '$5'}
          backgroundColor={isDisabled ? '$gray8' : undefined}
          onChangeText={field?.onChange}
        />
        {helper ? <Text marginBottom={errorMessage ? '$2' : '$3'}>{helper}</Text> : null}
        {errorMessage ? (
          <Text marginBottom="$3" color="$red9">
            {errorMessage}
          </Text>
        ) : null}
      </View>
    );
  }

  // https://github.com/danilowoz/react-content-loader
  // if (isLoading) {
  //   return <UiSkeleton height="56px" />;
  // }

  if (isHidden) {
    return <VisuallyHidden>{InputField()}</VisuallyHidden>;
  }

  return (
    <View position="relative" zIndex={0}>
      {InputField()}
    </View>
  );
};

export default InputView;
