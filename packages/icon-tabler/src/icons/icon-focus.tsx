/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFocus = (_props: any) => {
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
        <Circle cx={12} cy={12} r={0.5} fill="currentColor" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFocus))
export { Memo as IconFocus }
