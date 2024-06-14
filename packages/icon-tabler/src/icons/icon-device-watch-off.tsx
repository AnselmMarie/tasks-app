/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceWatchOff = (_props: any) => {
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
        <Path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132A2.99 2.99 0 0 1 15 18H9a3 3 0 0 1-3-3V9c0-.817.327-1.559.857-2.1" />
        <Path d="M9 18v3h6v-3M9 5V3h6v3M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceWatchOff))
export { Memo as IconDeviceWatchOff }
