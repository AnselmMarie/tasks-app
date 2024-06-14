import { useState } from 'react';

import { GenericNonReturnType, GenericStringReturnType } from '@tasks-app/models';

interface PageContentLogicReturn {
  refreshing: boolean;
  onRenderText: GenericStringReturnType;
  onHandleRefresh: GenericNonReturnType;
}

const PageContentLogic = (onRefresh: GenericNonReturnType): PageContentLogicReturn => {
  const [refreshing, setRefreshing] = useState(false);

  const renderText = (pullStatus: string): string => {
    switch (pullStatus) {
      case 'pulling':
        return `Pull down`;

      case 'canRelease':
        return `Release`;

      case 'refreshing':
        return 'Loading...';

      // case 'complete':
      //   return 'Refresh succeed';

      default:
        return '';
    }
  };

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return {
    refreshing,
    onRenderText: renderText,
    onHandleRefresh: handleRefresh,
  };
};

export default PageContentLogic;
