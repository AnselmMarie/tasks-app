/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAbacusOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5v16m14 0v-2m0-4V3M5 7h2m4 0h8M5 15h10m-7-2v4m3-4v4m5-1v1M14 5v4m-3-4v2M8 8v1M3 21h18M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAbacusOff))
export { Memo as IconAbacusOff }
