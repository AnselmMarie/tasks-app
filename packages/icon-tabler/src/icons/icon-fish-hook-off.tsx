/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFishHookOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 9v3m-.085 3.924A5 5 0 0 1 6 15v-4l3 3m5-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFishHookOff))
export { Memo as IconFishHookOff }
