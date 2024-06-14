import { ReactElement } from 'react';

// import { MotiView } from 'moti';
// import { Skeleton } from 'moti/skeleton';
import { GenericObjectInter } from '@tasks-app/models';
// import { useColorScheme } from 'react-native';
import { View } from 'tamagui';

import { SkeletonProps } from './skeleton.interface';

const SkeletonView = ({
  count = 1,
  width = '100%',
  height = 15,
  circle = false,
}: SkeletonProps): ReactElement => {
  // const scheme = useColorScheme();
  let newCount;

  if (circle) {
    newCount = 1;
  } else if (count >= 5) {
    newCount = 5;
  } else {
    newCount = count;
  }

  const arr = Array(newCount).fill({});

  return (
    <>
      {arr.map((el: GenericObjectInter, i: number): ReactElement => {
        return (
          <View key={i} marginBottom={count > 1 ? '$3' : ''}>
            {/* <MotiView
              transition={{
                type: 'timing',
              }}
              animate={{ backgroundColor: 'transparent' }}
            >
              <Skeleton
                colorMode={scheme === 'dark' ? 'dark' : 'light'}
                radius={circle ? 'round' : undefined}
                width={count > 1 && i === arr.length - 1 ? '50%' : width}
                height={height}
              />
            </MotiView> */}
          </View>
        );
      })}
    </>
  );
};

export default SkeletonView;
