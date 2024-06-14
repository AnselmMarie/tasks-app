/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBoxAlignTopFilled = (_props: any) => {
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
          d="M19 3.005H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2M4 13.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L3 14.995a1 1 0 0 1 1-1m0 5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L3 19.995a1 1 0 0 1 1-1m5 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L8 19.995a1 1 0 0 1 1-1m6 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L14 19.995a1 1 0 0 1 1-1m5 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 19.995a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 14.995a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBoxAlignTopFilled))
export { Memo as IconBoxAlignTopFilled }
