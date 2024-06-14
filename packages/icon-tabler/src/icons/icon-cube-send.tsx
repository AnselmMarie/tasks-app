/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCubeSend = (_props: any) => {
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
        <Path d="m16 12.5-5-3 5-3 5 3V15l-5 3z" />
        <Path d="M11 9.5V15l5 3m0-5.455 5-3.03M7 9H2m5 3H4m3 3H6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCubeSend))
export { Memo as IconCubeSend }
