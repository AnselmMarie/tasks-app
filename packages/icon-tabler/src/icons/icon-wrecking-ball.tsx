/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWreckingBall = (_props: any) => {
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
        <Path d="M17 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2H4m0-4h9" />
        <Path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
        <Path d="M5 15v-2a1 1 0 0 1 1-1h7m6-1V4l-6 7" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWreckingBall))
export { Memo as IconWreckingBall }
