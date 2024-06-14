/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCone_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 5.002v.5l-8.13 14.99a1 1 0 0 1-1.74 0L3 5.503v-.5C3 3.344 7.03 2 12 2s9 1.344 9 3.002"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCone_2))
export { Memo as IconCone_2 }
