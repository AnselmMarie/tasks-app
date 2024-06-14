import { ReactElement } from 'react';

import { Text, View } from 'tamagui';

import { UiIcon } from '../icon';

import { HelperDataInter, NoContentHelperProps } from './no-content-helper.interface';

const NoContentHelper = ({ helperData = [] }: NoContentHelperProps): ReactElement => {
  return (
    <View>
      {helperData.map((el: HelperDataInter, i: number): ReactElement => {
        if (el?.description) {
          return (
            <Text key={i} fontSize="$2" marginBottom="$4">
              {el?.description}
            </Text>
          );
        }

        if (el?.helper) {
          return (
            <View key={i} flexDirection="row" marginBottom="$3">
              <UiIcon name={el?.icon} size="$1" marginRight="$2" />
              <Text width="85%" fontSize="$2" lineHeight="$5">
                {el?.helper}
              </Text>
            </View>
          );
        }

        return <Text key={i}>No Information</Text>;
      })}
    </View>
  );
};

export default NoContentHelper;
