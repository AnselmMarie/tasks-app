/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSteeringWheelOff = (_props: any) => {
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
        <Path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
        <Path d="M10.595 10.576a2 2 0 1 0 2.827 2.83M12 14v7m-2-9-6.75-2m12.292 1.543L20.75 10M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSteeringWheelOff))
export { Memo as IconSteeringWheelOff }
