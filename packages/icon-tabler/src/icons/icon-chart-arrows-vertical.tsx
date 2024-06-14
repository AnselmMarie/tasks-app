/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartArrowsVertical = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 21V7m-9 8 3-3 3 3m0-5 3-3 3 3M3 21h18m-9 0v-9M3 6l3-3 3 3M6 21V3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartArrowsVertical))
export { Memo as IconChartArrowsVertical }
