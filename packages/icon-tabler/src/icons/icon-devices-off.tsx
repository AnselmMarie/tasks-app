/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDevicesOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8m-1 3h-6a1 1 0 0 1-1-1v-6m5-5V5a1 1 0 0 0-1-1H8M4 4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9m3-9h2M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDevicesOff))
export { Memo as IconDevicesOff }
