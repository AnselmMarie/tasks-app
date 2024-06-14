/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBongOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5V3h4v6m1.5 1.5L17 8l2 2-2.5 2.5m-.5 3.505a5 5 0 1 1-7-4.589V9M8 3h6M6.1 17h9.8M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBongOff))
export { Memo as IconBongOff }
