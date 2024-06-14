/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoodTongueWink = (_props: any) => {
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
        <Path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m6-2h.01" />
        <Path d="M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7m8.5-4c-.5-1-2.5-1-3 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMoodTongueWink))
export { Memo as IconMoodTongueWink }
