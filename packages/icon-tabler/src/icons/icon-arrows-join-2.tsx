/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsJoin_2 = (_props: any) => {
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
        <Path d="M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5H21" />
        <Path d="M3 17h1.95a5.854 5.854 0 0 0 4.798-2.5 5.854 5.854 0 0 1 4.798-2.5H20" />
        <Path d="m18 15 3-3-3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsJoin_2))
export { Memo as IconArrowsJoin_2 }
