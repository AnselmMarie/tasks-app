/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAnalyze = (_props: any) => {
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
        <Path d="M20 11a8.1 8.1 0 0 0-6.986-6.918A8.095 8.095 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 15 3" />
        <Path d="M18 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 4a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAnalyze))
export { Memo as IconAnalyze }
