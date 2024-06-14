/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSwitch_3 = (_props: any) => {
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
        <Path d="M3 17h2.397a5 5 0 0 0 4.096-2.133l.177-.253m3.66-5.227.177-.254A5 5 0 0 1 17.603 7H21" />
        <Path d="m18 4 3 3-3 3M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734A5 5 0 0 0 17.603 17H21" />
        <Path d="m18 20 3-3-3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSwitch_3))
export { Memo as IconSwitch_3 }
