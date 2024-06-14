/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShoppingCartExclamation = (_props: any) => {
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
        <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M15 17H6V3H4" />
        <Path d="m6 5 14 1-.854 5.976M16.5 13H6m13 3v3m0 3v.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconShoppingCartExclamation))
export { Memo as IconShoppingCartExclamation }