/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTypographyOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 20h3m7 0h6M6.9 15h6.9m-.8-2 3 7M5 20 9.09 9.094m1.091-2.911L11 4h2l3.904 8.924M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTypographyOff))
export { Memo as IconTypographyOff }
