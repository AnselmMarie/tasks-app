/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlass = (_props: any) => {
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
        <Path d="M8 21h8m-4-5v5m5-16 1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" />
        <Path d="M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGlass))
export { Memo as IconGlass }
