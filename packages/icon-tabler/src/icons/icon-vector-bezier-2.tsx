/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVectorBezier_2 = (_props: any) => {
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
        <Path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM7 5h7m-4 14h7m-9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M7 5.5a5 6.5 0 0 1 5 6.5 5 6.5 0 0 0 5 6.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVectorBezier_2))
export { Memo as IconVectorBezier_2 }
