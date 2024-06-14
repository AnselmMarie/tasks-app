import { GenericNonReturnType } from '@tasks-app/models';

import { SheetTypeEnum, SheetSnapModeEnum } from './sheet.enum';

export interface SheetModalProps {
  label?: string | null;
  openModal?: boolean;
  sheetType?: SheetTypeEnum;
  snapMode?: SheetSnapModeEnum;
  fullModal?: boolean;
  hideSheetX?: boolean;
  onModalChange?: GenericNonReturnType;
  onSelectionChange?: GenericNonReturnType;
}
