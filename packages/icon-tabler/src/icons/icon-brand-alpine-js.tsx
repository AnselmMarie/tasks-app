/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandAlpineJs = (_props: any) => {
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
        <Path d="M3 11.5 7.5 16h9l-9-9z" />
        <Path d="m16.5 16 4.5-4.5L16.5 7 12 11.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandAlpineJs))
export { Memo as IconBrandAlpineJs }
