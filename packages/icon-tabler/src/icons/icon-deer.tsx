/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeer = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M3 3c0 2 1 3 4 3 2 0 3 1 3 3m11-6c0 2-1 3-4 3-2 0-3 .333-3 3m-2 9c-1 0-4-3-4-6 0-2 1.333-3 4-3s4 1 4 3c0 3-3 6-4 6" />
        <Path d="m15.185 14.889.095-.18a4 4 0 1 1-6.56 0M17 3c0 1.333-.333 2.333-1 3M7 3c0 1.333.333 2.333 1 3M7 6c-2.667.667-4.333 1.667-5 3m15-3c2.667.667 4.333 1.667 5 3M8.5 10 7 9m8.5 1L17 9m-5 6h.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeer))
export { Memo as IconDeer }
