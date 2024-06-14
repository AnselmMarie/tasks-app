/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceCctvOff = (_props: any) => {
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
        <Path d="M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9m-.64 3.35a4 4 0 1 0 5.285 5.3" />
        <Path d="M19 7v7c0 .321-.022.637-.064.947m-1.095 2.913A7 7 0 0 1 5 14V7m7 7h.01M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceCctvOff))
export { Memo as IconDeviceCctvOff }
