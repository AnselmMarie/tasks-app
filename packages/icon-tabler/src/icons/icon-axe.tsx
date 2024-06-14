/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAxe = (_props: any) => {
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
        <Path d="m13 9 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 12" />
        <Path d="m6.66 15.66-3.32-3.32a1.25 1.25 0 0 1 .42-2.044L7 9l6-6 3 3-6 6-1.296 3.24a1.25 1.25 0 0 1-2.044.42" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAxe))
export { Memo as IconAxe }
