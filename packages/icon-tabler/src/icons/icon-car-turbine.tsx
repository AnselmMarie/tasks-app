/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCarTurbine = (_props: any) => {
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
        <Path d="M7 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" />
        <Path d="M11 9c2.489.108 4.489.108 6 0m0-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-6 9-3.5-1.5M11 13l2.5 3m-5 0 2.5-3m0 0 3.5-1.5M11 9v4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCarTurbine))
export { Memo as IconCarTurbine }
