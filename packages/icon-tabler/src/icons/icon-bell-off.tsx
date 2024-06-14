/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBellOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.346 5.353c.21-.129.428-.246.654-.353a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3m-1 3H4a4 4 0 0 0 2-3v-3a6.996 6.996 0 0 1 1.273-3.707M9 17v1a3 3 0 0 0 6 0v-1M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBellOff))
export { Memo as IconBellOff }
