/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMultiplier_1_5x = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16V8l-2 2m8 6h2a2 2 0 1 0 0-4h-2V8h4m-7 8v.01M17 16l4-4m0 4-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMultiplier_1_5x))
export { Memo as IconMultiplier_1_5x }
