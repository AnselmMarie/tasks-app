/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlassChampagne = (_props: any) => {
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
        <Path d="M9 21h6m-3-5v5M8 5a4 2 0 1 0 8 0 4 2 0 1 0-8 0" />
        <Path d="M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGlassChampagne))
export { Memo as IconGlassChampagne }
