/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartDonut_4 = (_props: any) => {
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
        <Path d="M8.848 14.667 5.5 17.5M12 3v5m4 4h5M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m11.219 3.328L17 19.5" />
        <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartDonut_4))
export { Memo as IconChartDonut_4 }
