/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartDots_2 = (_props: any) => {
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
        <Path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-9-6 1.5m-.887 2.15 2.771 3.695M16 12.5l-5 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartDots_2))
export { Memo as IconChartDots_2 }
