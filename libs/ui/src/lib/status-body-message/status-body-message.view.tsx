import { ReactElement } from 'react';

import { Text, View } from 'tamagui';

import { StatusBodyTypeEnum } from './status-body-message.enum';
import { StatusBodyMessageProps } from './status-body-message.interface';

const StatusBodyMessage = ({
  display = false,
  error = null,
  message,
  status = StatusBodyTypeEnum.ERROR,
}: StatusBodyMessageProps): ReactElement | null => {
  if (!display) return null;

  let statusBg = '$red9';
  const bodyColor = 'white';

  if (status === StatusBodyTypeEnum.SUCCESS) {
    statusBg = '$green9';
  }

  if (Array.isArray(message) && message.length > 0) {
    return (
      <>
        {message.map((el: string, i: number): ReactElement => {
          return (
            <View key={i} backgroundColor={statusBg}>
              <Text padding="$3" color={bodyColor}>
                {el}
              </Text>
            </View>
          );
        })}
      </>
    );
  }

  return (
    <View backgroundColor={statusBg}>
      <Text padding="$3" color={bodyColor}>
        {error?.message || message}
      </Text>
    </View>
  );
};

export default StatusBodyMessage;
