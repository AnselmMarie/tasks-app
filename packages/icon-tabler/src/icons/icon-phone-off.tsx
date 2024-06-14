/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhoneOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21 21 3M5.831 14.161A15.946 15.946 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5-2.5 1.5c.108.22.223.435.345.645m1.751 2.277A11.03 11.03 0 0 0 13.5 15.5L15 13l5 2v4a2 2 0 0 1-2 2 15.963 15.963 0 0 1-10.344-4.657"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhoneOff))
export { Memo as IconPhoneOff }
