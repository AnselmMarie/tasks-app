/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsUpLeft = (_props: any) => {
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
        <Path d="m21 7-4-4-4 4" />
        <Path d="M17 3v11a3 3 0 0 1-3 3H3" />
        <Path d="m7 13-4 4 4 4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsUpLeft))
export { Memo as IconArrowsUpLeft }
