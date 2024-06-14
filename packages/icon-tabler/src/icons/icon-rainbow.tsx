/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRainbow = (_props: any) => {
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
        <Path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" />
        <Path d="M18 17a6 6 0 1 0-12 0" />
        <Path d="M14 17a2 2 0 1 0-4 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRainbow))
export { Memo as IconRainbow }
