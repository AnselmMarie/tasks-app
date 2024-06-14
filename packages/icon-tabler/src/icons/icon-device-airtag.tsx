/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceAirtag = (_props: any) => {
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
        <Path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0m5 3v.01" />
        <Path d="M15 15a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceAirtag))
export { Memo as IconDeviceAirtag }
