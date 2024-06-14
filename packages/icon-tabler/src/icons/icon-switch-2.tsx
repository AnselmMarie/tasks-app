/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSwitch_2 = (_props: any) => {
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
        <Path d="M3 17h5l1.67-2.386m3.66-5.227L15 7h6" />
        <Path d="m18 4 3 3-3 3M3 7h5l7 10h6" />
        <Path d="m18 20 3-3-3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSwitch_2))
export { Memo as IconSwitch_2 }
