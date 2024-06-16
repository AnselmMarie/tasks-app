import { ReactElement } from 'react';

import { GenericNonReturnType } from '@tasks-app/models';
import ErrorBoundary from 'react-native-error-boundary';
import { Text, View } from 'tamagui';

import { UiButton } from '../button';
import { UiPageContent } from '../page-content';

const Fallback = (props: { error: Error; resetError: GenericNonReturnType }): ReactElement => {
  return (
    <UiPageContent fullScreen>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text className="text-lg font-semibold">Oops, something went wrong :(</Text>
        <Text>{props.error.toString()}</Text>
        <UiButton onPress={props.resetError}>Refresh App</UiButton>
      </View>
    </UiPageContent>
  );
};

const ErrorFallback = (props: { children: ReactElement }): ReactElement => {
  return <ErrorBoundary FallbackComponent={Fallback}>{props?.children}</ErrorBoundary>;
};

export default ErrorFallback;
