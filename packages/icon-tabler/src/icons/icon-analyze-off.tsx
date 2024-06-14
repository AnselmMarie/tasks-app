/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAnalyzeOff = (_props: any) => {
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
        <Path d="M20 11a8.1 8.1 0 0 0-6.986-6.918 8.086 8.086 0 0 0-4.31.62M6.321 6.31A8.089 8.089 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1" />
        <Path d="M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5.888 1.87a3 3 0 1 0 4.233 4.252m.595-3.397A3.012 3.012 0 0 0 13.29 9.29M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAnalyzeOff))
export { Memo as IconAnalyzeOff }
