/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBusinessplan = (_props: any) => {
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
        <Path d="M11 6a5 3 0 1 0 10 0 5 3 0 1 0-10 0" />
        <Path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6" />
        <Path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" />
        <Path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBusinessplan))
export { Memo as IconBusinessplan }
