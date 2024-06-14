/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPercentage = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 11L18 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPercentage))
export { Memo as IconPercentage }
