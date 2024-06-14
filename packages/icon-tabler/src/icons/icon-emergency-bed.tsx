/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEmergencyBed = (_props: any) => {
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
        <Path d="M14 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 8l2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4m-2-2v4" />
        <Path d="M12 12v2l-2.5 2.5m5 0L12 14" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEmergencyBed))
export { Memo as IconEmergencyBed }
