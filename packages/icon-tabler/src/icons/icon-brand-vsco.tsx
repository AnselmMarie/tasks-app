/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandVsco = (_props: any) => {
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
        <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
        <Path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-5-9v4m9 5h-4m-5 9v-4m-9-5h4m11.364-6.364-2.828 2.828m2.828 9.9-2.828-2.828m-9.9 2.828 2.828-2.828m-2.828-9.9 2.828 2.828" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandVsco))
export { Memo as IconBrandVsco }
