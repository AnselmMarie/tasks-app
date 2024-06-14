import { ReactElement } from 'react';

import { Text, View, Spinner } from 'tamagui';

import { UiPageContent } from '../page-content';

import { ScreenLoaderProps } from './screen-loader.interface';

const ScreenLoader = ({ pageName = null }: ScreenLoaderProps): ReactElement => {
  return (
    <UiPageContent fullScreen>
      <View flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" marginBottom="$4" />
        <Text fontSize="$4">Loading {pageName || 'screen'}</Text>
      </View>
    </UiPageContent>
  );
};

export default ScreenLoader;
