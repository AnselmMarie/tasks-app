import { Text, View } from 'tamagui';

import { UiCard } from '../card';

import { NoUiContentRowProps } from './no-content-row.interface';

const NoContentRow = ({ noUiCard = false }: NoUiContentRowProps) => {
  if (noUiCard) {
    return (
      <View padding="$4" alignItems="center">
        <Text fontSize="$2">No Content</Text>
      </View>
    );
  }
  return (
    <UiCard padding="$4" alignItems="center">
      <Text fontSize="$2">No Content</Text>
    </UiCard>
  );
};

export default NoContentRow;
