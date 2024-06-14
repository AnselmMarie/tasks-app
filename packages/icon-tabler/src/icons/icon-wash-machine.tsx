/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWashMachine = (_props: any) => {
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
        <Path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
        <Path d="M8 14a4 4 0 1 0 8 0 4 4 0 1 0-8 0m0-8h.01M11 6h.01M14 6h2" />
        <Path d="M8 14c1.333-.667 2.667-.667 4 0 1.333.667 2.667.667 4 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWashMachine))
export { Memo as IconWashMachine }
