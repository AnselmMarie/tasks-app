/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceNintendoOff = (_props: any) => {
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
        <Path d="M4.713 4.718A4 4 0 0 0 3 8v8a4 4 0 0 0 4 4h3V10m0-4V4H8m6 6V4h3a4 4 0 0 1 4 4v8c0 .308-.035.608-.1.896m-1.62 2.39A3.982 3.982 0 0 1 17 20h-3v-6" />
        <Path d="M5.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceNintendoOff))
export { Memo as IconDeviceNintendoOff }
