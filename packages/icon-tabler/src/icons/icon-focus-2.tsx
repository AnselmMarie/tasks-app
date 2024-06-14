/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFocus_2 = (_props: any) => {
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
        <Path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m7-9v2m-9 7h2m7 7v2m7-9h2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFocus_2))
export { Memo as IconFocus_2 }
