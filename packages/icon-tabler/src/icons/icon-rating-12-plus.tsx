/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRating_12Plus = (_props: any) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m4 3V9m8.5 3h3M17 10.5v3" />
        <Path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443-.313.989-.612 1.393L10 15h3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRating_12Plus))
export { Memo as IconRating_12Plus }
