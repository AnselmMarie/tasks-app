/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeglass_2 = (_props: any) => {
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
        <Path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" />
        <Path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-11 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEyeglass_2))
export { Memo as IconEyeglass_2 }
