/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRainbowOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 17c0-5.523-4.477-10-10-10-.308 0-.613.014-.914.041m-3.208.845A10 10 0 0 0 2 17m9.088-5.931A6 6 0 0 0 6 17m8 0a2 2 0 1 0-4 0M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRainbowOff))
export { Memo as IconRainbowOff }
