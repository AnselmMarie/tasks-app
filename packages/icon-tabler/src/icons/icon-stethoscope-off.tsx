/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStethoscopeOff = (_props: any) => {
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
        <Path d="M4.172 4.179A2 2 0 0 0 3 6v3.5a5.5 5.5 0 0 0 9.856 3.358M14 10V6a2 2 0 0 0-2-2h-1" />
        <Path d="M8 15a6 6 0 0 0 10.714 3.712m1.216-2.798c.046-.3.07-.605.07-.914v-3m-9-9v2" />
        <Path d="M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStethoscopeOff))
export { Memo as IconStethoscopeOff }
