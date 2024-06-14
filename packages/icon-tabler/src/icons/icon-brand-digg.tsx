/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDigg = (_props: any) => {
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
        <Path d="M6 15H3v-4h3m9 4h-3v-4h3m-6 4v-4" />
        <Path d="M15 11v7h-3M6 7v8m15 0h-3v-4h3" />
        <Path d="M21 11v7h-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDigg))
export { Memo as IconBrandDigg }
