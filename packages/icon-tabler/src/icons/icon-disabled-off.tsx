/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDisabledOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7a2 2 0 1 0-2-2m2 6v4h4l4 5m-4-9h1m-9 .5a5 5 0 1 0 6 7.5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDisabledOff))
export { Memo as IconDisabledOff }
