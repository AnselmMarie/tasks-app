/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyShekel = (_props: any) => {
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
        <Path d="M6 18V6h4a4 4 0 0 1 4 4v4" />
        <Path d="M18 6v12h-4a4 4 0 0 1-4-4v-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyShekel))
export { Memo as IconCurrencyShekel }
