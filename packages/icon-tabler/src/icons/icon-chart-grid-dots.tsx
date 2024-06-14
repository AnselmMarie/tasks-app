/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartGridDots = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 0h8m2 2v1m0-18v1M6 20v1m0-11V3m6 0v18m6-13v8M8 12h13m0-6h-1m-4 0H3m0 6h1m16 6h1M3 18h1m2-4v2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartGridDots))
export { Memo as IconChartGridDots }
