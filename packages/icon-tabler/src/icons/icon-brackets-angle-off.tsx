/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBracketsAngleOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 4h.01M6.453 6.474 3 12l5 8m8-16 5 8-1.917 3.067m-1.548 2.477L16 20M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBracketsAngleOff))
export { Memo as IconBracketsAngleOff }
