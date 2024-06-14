/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZodiacLeo = (_props: any) => {
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
        <Path d="M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m4-9a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M7 7c0 3 2 5 2 9m6-9c0 4-2 6-2 10" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZodiacLeo))
export { Memo as IconZodiacLeo }
