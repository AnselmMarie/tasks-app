/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTemperatureSnow = (_props: any) => {
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
        <Path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m6.75-5 1 2H18" />
        <Path d="m17 4-3 5 2 3m4.25-2L19 12l1.25 2" />
        <Path d="M22 12h-6l-2 3m4 3h-2.25l-1 2" />
        <Path d="m17 20-3-5h-1m-1-6 2.088.008" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTemperatureSnow))
export { Memo as IconTemperatureSnow }
