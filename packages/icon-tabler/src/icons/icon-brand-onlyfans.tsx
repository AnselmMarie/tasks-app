/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandOnlyfans = (_props: any) => {
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
        <Path d="M8.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" />
        <Path d="M8.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m5.5 1c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandOnlyfans))
export { Memo as IconBrandOnlyfans }
