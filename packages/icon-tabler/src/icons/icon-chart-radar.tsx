/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartRadar = (_props: any) => {
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
        <Path d="m12 3 9.5 7L18 21H6L2.5 10z" />
        <Path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z" />
        <Path d="m2.5 10 9.5 3 9.5-3" />
        <Path d="M12 3v10l6 8M6 21l6-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartRadar))
export { Memo as IconChartRadar }
