/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBulldozer = (_props: any) => {
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
        <Path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m7-4v4a2 2 0 0 0 2 2h1m-8 0H4m0-4h10" />
        <Path d="M9 11V6h2a3 3 0 0 1 3 3v6" />
        <Path d="M5 15v-3a1 1 0 0 1 1-1h8m5 6h-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBulldozer))
export { Memo as IconBulldozer }
