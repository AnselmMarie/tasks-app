/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBusOff = (_props: any) => {
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
        <Path d="M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12.18-.828a2 2 0 0 0 2.652 2.648" />
        <Path d="M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8" />
        <Path d="m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3m5-5v3M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBusOff))
export { Memo as IconBusOff }
