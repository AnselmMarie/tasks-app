/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoodEdit = (_props: any) => {
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
        <Path d="M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01" />
        <Path d="M9.5 15c.658.672 1.56 1 2.5 1 .126 0 .251-.006.376-.018m6.044-.372a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMoodEdit))
export { Memo as IconMoodEdit }
