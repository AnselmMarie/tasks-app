import { GenericNonReturnType } from '@tasks-app/models';

export interface AlertDialogViewProps {
  title: string;
  isOpen: boolean;
  description: string;
  okButton?: boolean;
  onButtonPress: GenericNonReturnType;
}
