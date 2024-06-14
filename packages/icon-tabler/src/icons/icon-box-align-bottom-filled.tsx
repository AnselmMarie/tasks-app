/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBoxAlignBottomFilled = (_props: any) => {
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
          d="M20 13H4a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1M4 8a1 1 0 0 1 .993.883L5 9.01a1 1 0 0 1-1.993.117L3 9a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883L5 4.01a1 1 0 0 1-1.993.117L3 4a1 1 0 0 1 1-1m5 0a1 1 0 0 1 .993.883L10 4.01a1 1 0 0 1-1.993.117L8 4a1 1 0 0 1 1-1m6 0a1 1 0 0 1 .993.883L16 4.01a1 1 0 0 1-1.993.117L14 4a1 1 0 0 1 1-1m5 0a1 1 0 0 1 .993.883L21 4.01a1 1 0 0 1-1.993.117L19 4a1 1 0 0 1 1-1m0 5a1 1 0 0 1 .993.883L21 9.01a1 1 0 0 1-1.993.117L19 9a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBoxAlignBottomFilled))
export { Memo as IconBoxAlignBottomFilled }
