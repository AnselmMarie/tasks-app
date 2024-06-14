/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGavel = (_props: any) => {
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
        <Path d="m13 10 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13M6 9l4 4m3-3L9 6M3 21h7" />
        <Path d="m6.793 15.793-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5 6 9l3-3-.5-.5 2.293-2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414L13.5 10.5 13 10l-3 3 .5.5-2.293 2.293a1 1 0 0 1-1.414 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGavel))
export { Memo as IconGavel }
