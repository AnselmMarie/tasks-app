import { forwardRef, PropsWithChildren } from 'react';

import { noopUtil } from '@tasks-app/utils';
import { KeyboardAvoidingView, RefreshControl } from 'react-native';
import { ScrollView, View } from 'tamagui';

import { PageContentProps } from './page-content.interface';
import usePageContentLogic from './use-page-content.logic';

const PageContentView = forwardRef(function PageContent(
  props: PropsWithChildren<PageContentProps>,
  ref
) {
  const {
    containerStyles,
    children,
    fullScreen,
    hasRefresh = false,
    onRefresh = async () => {
      noopUtil();
    },
    onScroll = null,
  } = props;
  const { refreshing, onHandleRefresh } = usePageContentLogic(onRefresh);

  if (fullScreen) {
    return <View flex={1}>{children}</View>;
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
      <ScrollView
        ref={ref}
        contentContainerStyle={containerStyles}
        refreshControl={
          hasRefresh ? (
            <RefreshControl refreshing={refreshing} onRefresh={onHandleRefresh} />
          ) : undefined
        }
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

export default PageContentView;
