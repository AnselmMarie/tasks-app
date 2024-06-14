/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSTurnRight = (_props: any) => {
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
        <Path d="M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7H21" />
        <Path d="m18 16 3 3-3 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSTurnRight))
export { Memo as IconSTurnRight }
