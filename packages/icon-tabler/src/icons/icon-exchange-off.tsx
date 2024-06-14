/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExchangeOff = (_props: any) => {
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
        <Path d="M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.978 4.978 0 0 1 14 18h-3l3-3m0 6-3-3m-6-2v-5c0-1.632.782-3.082 1.992-4M10 6h3l-3-3m1.501 4.499L13 6M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconExchangeOff))
export { Memo as IconExchangeOff }
