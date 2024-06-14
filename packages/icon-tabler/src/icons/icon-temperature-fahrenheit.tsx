/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTemperatureFahrenheit = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 4h5m2-6h-6a1 1 0 0 0-1 1v11"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTemperatureFahrenheit))
export { Memo as IconTemperatureFahrenheit }
