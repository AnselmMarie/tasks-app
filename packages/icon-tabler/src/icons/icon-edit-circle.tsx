/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEditCircle = (_props: any) => {
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
        <Path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zm4-10 3 3" />
        <Path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEditCircle))
export { Memo as IconEditCircle }
