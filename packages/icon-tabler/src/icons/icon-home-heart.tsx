/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHomeHeart = (_props: any) => {
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
        <Path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h6" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413 1.627 1.627 0 0 0-2.346 0l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346 0 1.74 1.74 0 0 0 0 2.412l2.51 2.59z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHomeHeart))
export { Memo as IconHomeHeart }
