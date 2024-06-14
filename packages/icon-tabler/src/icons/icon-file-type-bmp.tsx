/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileTypeBmp = (_props: any) => {
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
        <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-1 6h1.5a1.5 1.5 0 0 0 0-3H18v6M4 21h1.5a1.5 1.5 0 0 0 0-3H4h1.5a1.5 1.5 0 0 0 0-3H4zm6 0v-6l2.5 3 2.5-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFileTypeBmp))
export { Memo as IconFileTypeBmp }