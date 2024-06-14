/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBottleOff = (_props: any) => {
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
        <Path d="M10 5h4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z" />
        <Path d="M14 3.5c0 1.626.507 3.212 1.45 4.537l.05.07a8.093 8.093 0 0 1 1.5 4.694V13m0 4v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6.2a8.09 8.09 0 0 1 1.35-4.474m1.336-2.63A7.822 7.822 0 0 0 10 3.5" />
        <Path d="M7 14.803A2.4 2.4 0 0 0 8 14a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 .866-.142M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBottleOff))
export { Memo as IconBottleOff }
