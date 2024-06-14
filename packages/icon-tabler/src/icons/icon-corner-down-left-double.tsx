/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCornerDownLeftDouble = (_props: any) => {
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
        <Path d="M19 5v6a3 3 0 0 1-3 3H9" />
        <Path d="m13 10-4 4 4 4m-5-8-4 4 4 4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCornerDownLeftDouble))
export { Memo as IconCornerDownLeftDouble }
