/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBuildingCarousel = (_props: any) => {
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
        <Path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
        <Path d="M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-9 6 4-10 4 10" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBuildingCarousel))
export { Memo as IconBuildingCarousel }
