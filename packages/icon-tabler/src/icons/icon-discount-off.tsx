/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiscountOff = (_props: any) => {
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
        <Path d="m9 15 3-3m2-2 1-1m-5.852.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142m4.298 4.287A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142" />
        <Path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDiscountOff))
export { Memo as IconDiscountOff }
