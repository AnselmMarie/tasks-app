/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShirtOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.243 4.252 9 4c0 .43.09.837.252 1.206m1.395 1.472A3 3 0 0 0 15 4l6 2v5h-3v3m0 4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l2.26-.753M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShirtOff))
export { Memo as IconShirtOff }
