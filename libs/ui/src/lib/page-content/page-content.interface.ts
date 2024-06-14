import { GenericNonReturnPromiseType, GenericNonReturnType } from '@tasks-app/models';
import { StyleProp, ViewStyle } from 'react-native';

export interface PageContentProps {
  hasRefresh?: boolean;
  fullScreen?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  onRefresh?: GenericNonReturnPromiseType;
  onScroll?: GenericNonReturnType;
}
