/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCubeUnfolded = (_props: any) => {
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
        <Path d="M2 15h10v5h5v-5h5v-5H12V5H7v5H2z" />
        <Path d="M7 15v-5h5v5h5v-5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCubeUnfolded))
export { Memo as IconCubeUnfolded }
