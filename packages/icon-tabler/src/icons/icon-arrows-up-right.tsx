/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsUpRight = (_props: any) => {
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
        <Path d="m17 21 4-4-4-4" />
        <Path d="M21 17H10a3 3 0 0 1-3-3V3" />
        <Path d="M11 7 7 3 3 7" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsUpRight))
export { Memo as IconArrowsUpRight }
