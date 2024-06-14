/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMathMax = (_props: any) => {
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
        <Path d="M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M3 15s.616-5.544 2.332-7.93m3.305.042C11.354 10.425 14.519 20 17 20c2 0 3.333-3 4-9" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMathMax))
export { Memo as IconMathMax }
