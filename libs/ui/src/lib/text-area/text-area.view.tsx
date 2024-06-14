import { ReactElement, useId } from 'react';

import { useController, useForm } from 'react-hook-form';
// import { StyleSheet } from 'react-native';
import { View, VisuallyHidden, Text, Label, TextArea } from 'tamagui';

import { InputProps } from './text-area.interface';

const TextAreaView = (props: InputProps): ReactElement => {
  const {
    name = '',
    label,
    helper = null,
    control = null,
    errorMessage = '',
    isDisabled = false,
    isRequired = false,
    isHidden = false,
    isReadyOnly = false,
    isPassword = false,
  } = props;
  const id = `${name}${useId()}`;
  const { control: internalControl } = useForm();
  const currentControl = control || internalControl;

  const { field } = useController({
    control: currentControl,
    name,
  });

  function TextAreaField() {
    return (
      <View width="100%" position="relative">
        {isDisabled ? (
          <View flex={1} width="100%" height="100%" zIndex={1} position="absolute" />
        ) : null}
        <Label htmlFor={id}>{!isRequired ? label : `${label}*`}</Label>
        {/* <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        > */}
        <TextArea
          // id={id}
          disabled={isDisabled}
          value={field?.value}
          numberOfLines={3}
          readOnly={isReadyOnly}
          autoCorrect={!isPassword}
          marginBottom={helper || errorMessage ? '$2' : '$5'}
          backgroundColor={isDisabled ? '$gray8' : undefined}
          multiline
          onChangeText={field?.onChange}
        />
        {/* </KeyboardAvoidingView> */}
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
    return <VisuallyHidden>{TextAreaField()}</VisuallyHidden>;
  }

  return (
    <View position="relative" zIndex={0}>
      {TextAreaField()}
    </View>
  );
};

export default TextAreaView;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//   },
// });
