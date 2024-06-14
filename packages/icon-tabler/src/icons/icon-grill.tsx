/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGrill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zm-2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-2-6 1 2m-7-2-3 6m9-2H7m8-13V4m-3 1V4M9 5V4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGrill))
export { Memo as IconGrill }
