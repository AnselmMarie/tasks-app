import { GenericNonReturnType } from '@tasks-app/models';
import { ListItemProps } from 'tamagui';

export interface ItemProps extends ListItemProps {
  isLoading?: boolean;
  displayHr?: boolean;
  isItemButton?: boolean;
  onClick?: GenericNonReturnType | null;
}
