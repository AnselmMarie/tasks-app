/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLoadBalancer = (_props: any) => {
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
        <Path d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0m2 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-4v3m0-9V3M9 6l3-3 3 3m-3 4V3" />
        <Path d="m9 6 3-3 3 3m-.106 6.227 6.11-2.224M17.159 8.21l3.845 1.793-1.793 3.845m-10.11-1.634-6.075-2.211M6.871 8.21l-3.845 1.793 1.793 3.845" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLoadBalancer))
export { Memo as IconLoadBalancer }
