/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrowserOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702A1 1 0 0 1 19 20H5a1 1 0 0 1-1-1V5c0-.276.112-.526.293-.707M4 8h4m4 0h8M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrowserOff))
export { Memo as IconBrowserOff }
