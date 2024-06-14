/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoodPlus = (_props: any) => {
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
        <Path d="M20.985 12.528a9 9 0 1 0-8.45 8.456M16 19h6m-3-3v6M9 10h.01M15 10h.01" />
        <Path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMoodPlus))
export { Memo as IconMoodPlus }
