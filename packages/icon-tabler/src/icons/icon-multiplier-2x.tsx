/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMultiplier_2x = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14 16 4-4m0 4-4-4m-8-2a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L6 16.001h4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMultiplier_2x))
export { Memo as IconMultiplier_2x }
