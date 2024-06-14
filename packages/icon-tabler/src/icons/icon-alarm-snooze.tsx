/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlarmSnooze = (_props: any) => {
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
        <Path d="M5 13a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
        <Path d="M10 11h4l-4 4h4M7 4 4.25 6M17 4l2.75 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlarmSnooze))
export { Memo as IconAlarmSnooze }
