/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShoppingCartOff = (_props: any) => {
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
        <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m13-2a2 2 0 1 0 2 2" />
        <Path d="M17 17H6V6m3.239-.769L20 6l-1 7h-2m-4 0H6M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconShoppingCartOff))
export { Memo as IconShoppingCartOff }
