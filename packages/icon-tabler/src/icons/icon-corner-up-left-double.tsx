/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCornerUpLeftDouble = (_props: any) => {
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
        <Path d="M19 18v-6a3 3 0 0 0-3-3H9" />
        <Path d="M13 13 9 9l4-4m-5 8L4 9l4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCornerUpLeftDouble))
export { Memo as IconCornerUpLeftDouble }
