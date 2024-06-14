/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFountainOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M9 16v-5a2 2 0 1 0-4 0m10 5v-1m0-4a2 2 0 1 1 4 0m-7 5v-4m0-4V6a3 3 0 0 1 6 0" />
        <Path d="M7.451 3.43A3 3 0 0 1 12 6m8 10h1v1m-.871 3.114A2.99 2.99 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFountainOff))
export { Memo as IconFountainOff }
