/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowRampRight_2 = (_props: any) => {
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
        <Path d="M6 3v8.707M16 14l4-4-4-4" />
        <Path d="M6 21c0-6.075 4.925-11 11-11h3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowRampRight_2))
export { Memo as IconArrowRampRight_2 }
