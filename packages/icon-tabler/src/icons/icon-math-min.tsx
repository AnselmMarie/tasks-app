/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMathMin = (_props: any) => {
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
        <Path d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883m3.388.155C19.45 16.158 20.2 13.478 21 9" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMathMin))
export { Memo as IconMathMin }
