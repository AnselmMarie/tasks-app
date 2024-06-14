/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAugmentedReality_2 = (_props: any) => {
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
        <Path d="M10 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5" />
        <Path d="m17 17-4-2.5 4-2.5 4 2.5V19l-4 2.5z" />
        <Path d="M13 14.5V19l4 2.5m0-4.5 4-2.5M11 4h2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAugmentedReality_2))
export { Memo as IconAugmentedReality_2 }
