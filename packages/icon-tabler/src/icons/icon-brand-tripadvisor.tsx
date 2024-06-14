/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTripadvisor = (_props: any) => {
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
        <Path d="M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m11 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
        <Path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zm-11 0A4.5 4.5 0 1 1 3 10.671L2 9z" />
        <Path d="m10.5 15.5 1.5 2 1.5-2M9 6.75c2-.667 4-.667 6 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTripadvisor))
export { Memo as IconBrandTripadvisor }
