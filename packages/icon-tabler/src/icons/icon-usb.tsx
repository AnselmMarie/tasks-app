/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsb = (_props: any) => {
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
        <Path d="M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V5.5M7 10v3l5 3m0-1.5 5-2V10m-1 0h2V8h-2z" />
        <Path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-3.5h4L12 3z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconUsb))
export { Memo as IconUsb }
