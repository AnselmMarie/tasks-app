/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeglassOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.536 5.546 3 14M16 4h2l3 10m-11 2h4m5.426 3.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5c0 .157-.01.312-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7zM3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEyeglassOff))
export { Memo as IconEyeglassOff }
