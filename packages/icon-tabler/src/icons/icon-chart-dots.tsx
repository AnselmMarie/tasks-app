/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartDots = (_props: any) => {
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
        <Path d="M3 3v18h18" />
        <Path d="M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-5 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1.84-4.38 2.34 2.88m2.588-.172 2.837-4.586" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartDots))
export { Memo as IconChartDots }
