/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBusStop = (_props: any) => {
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
        <Path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2m-4 0H8" />
        <Path d="m16 5 1.5 7H22M9.5 10H17m-5-5v5M5 9v11" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBusStop))
export { Memo as IconBusStop }
