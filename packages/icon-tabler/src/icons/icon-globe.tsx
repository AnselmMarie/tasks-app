/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobe = (_props: any) => {
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
        <Path d="M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
        <Path d="M5.75 15A8.015 8.015 0 1 0 15 2m-4 15v4m-4 0h8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGlobe))
export { Memo as IconGlobe }
