/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartHistogram = (_props: any) => {
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
        <Path d="M3 3v18h18m-1-3v3m-4-5v5m-4-8v8m-4-5v5" />
        <Path d="M3 11c6 0 5-5 9-5s3 5 9 5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartHistogram))
export { Memo as IconChartHistogram }
