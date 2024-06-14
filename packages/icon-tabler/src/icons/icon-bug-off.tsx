/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBugOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.884 5.873A3 3 0 0 1 15 8v1m-2 0h3a6 6 0 0 1 1 3v1m-.298 3.705A5 5 0 0 1 7 15v-3a6 6 0 0 1 1-3h1m-6 4h4m10 0h4m-9 7v-6m-8 5 3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBugOff))
export { Memo as IconBugOff }
