/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowCurveLeft = (_props: any) => {
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
        <Path d="m14 7-4-4-4 4" />
        <Path d="M10 3v4.394A6.737 6.737 0 0 0 13 13a6.737 6.737 0 0 1 3 5.606V21" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowCurveLeft))
export { Memo as IconArrowCurveLeft }
