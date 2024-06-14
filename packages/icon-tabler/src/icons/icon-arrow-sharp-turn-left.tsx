/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSharpTurnLeft = (_props: any) => {
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
        <Path d="M17 18V6.69a.7.7 0 0 0-1.195-.495L6 16" />
        <Path d="M11 16H6v-5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSharpTurnLeft))
export { Memo as IconArrowSharpTurnLeft }
