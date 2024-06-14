/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSteam = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5.5 5.5l3 3m7 7 3 3m0-13-3 3m-7 7-3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSteam))
export { Memo as IconSteam }
