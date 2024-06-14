/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartDots_3 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m1-9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6-1 5-1.5m-7.5-7 7.81 5.37M7 7l8-1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartDots_3))
export { Memo as IconChartDots_3 }
