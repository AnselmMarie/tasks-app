/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceIpadOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4m5 15h6M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceIpadOff))
export { Memo as IconDeviceIpadOff }
