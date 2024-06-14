/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodeCircle_2 = (_props: any) => {
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
        <Path d="M8.5 13.5 7 12l1.5-1.5m7 0L17 12l-1.5 1.5" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m10-2.5L11 15" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCodeCircle_2))
export { Memo as IconCodeCircle_2 }
