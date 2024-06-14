/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircuitBulb = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m1.5-3.5 7 7m0-7-7 7"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircuitBulb))
export { Memo as IconCircuitBulb }
