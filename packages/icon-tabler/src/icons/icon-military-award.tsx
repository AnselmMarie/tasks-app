/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMilitaryAward = (_props: any) => {
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
        <Path d="M8 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5m7-4.5 1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMilitaryAward))
export { Memo as IconMilitaryAward }
