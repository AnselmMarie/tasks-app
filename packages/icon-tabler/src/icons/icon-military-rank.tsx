/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMilitaryRank = (_props: any) => {
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
        <Path d="M17 7v13H7V7l5-3z" />
        <Path d="m10 13 2-1 2 1m-4 4 2-1 2 1m-4-8 2-1 2 1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMilitaryRank))
export { Memo as IconMilitaryRank }
