/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTopologyStarRing_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0h4m4 0h4m-6-6v4m0 4v4m-6.5-7.5 5-5m3 0 5 5m0 3-5 5m-3 0-5-5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTopologyStarRing_2))
export { Memo as IconTopologyStarRing_2 }
