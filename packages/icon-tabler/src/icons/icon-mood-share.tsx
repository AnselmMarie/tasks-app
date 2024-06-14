/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoodShare = (_props: any) => {
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
        <Path d="M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01" />
        <Path d="M9.5 15c.658.672 1.56 1 2.5 1 .213 0 .424-.017.63-.05M16 22l5-5m0 4.5V17h-4.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMoodShare))
export { Memo as IconMoodShare }
