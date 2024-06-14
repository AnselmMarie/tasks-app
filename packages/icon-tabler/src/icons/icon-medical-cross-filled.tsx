/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMedicalCrossFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="m11 2-.15.005A2 2 0 0 0 9 4v2.803L6.572 5.402a2 2 0 0 0-2.732.732l-1 1.732-.073.138a2 2 0 0 0 .805 2.594L5.999 12l-2.427 1.402a2 2 0 0 0-.732 2.732l1 1.732.083.132a2 2 0 0 0 2.649.6L9 17.196V20a2 2 0 0 0 2 2h2l.15-.005A2 2 0 0 0 15 20v-2.804l2.428 1.403a2 2 0 0 0 2.732-.732l1-1.732.073-.138a2 2 0 0 0-.805-2.594L18 12l2.428-1.402a2 2 0 0 0 .732-2.732l-1-1.732-.083-.132a2 2 0 0 0-2.649-.6L15 6.802V4a2 2 0 0 0-2-2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMedicalCrossFilled))
export { Memo as IconMedicalCrossFilled }
