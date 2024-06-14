/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsRightDown = (_props: any) => {
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
        <Path d="m3 17 4 4 4-4" />
        <Path d="M7 21V10a3 3 0 0 1 3-3h11" />
        <Path d="m17 11 4-4-4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsRightDown))
export { Memo as IconArrowsRightDown }
