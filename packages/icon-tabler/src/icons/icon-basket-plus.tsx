/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBasketPlus = (_props: any) => {
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
        <Path d="m17 10-2-6m-8 6 2-6m3 16H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.359 2.043" />
        <Path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m6 5h6m-3-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBasketPlus))
export { Memo as IconBasketPlus }
