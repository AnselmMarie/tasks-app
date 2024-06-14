/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTopologyStar = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-6-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.5 7.5l3 3m-3 6 3-3m3 0 3 3m0-9-3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTopologyStar))
export { Memo as IconTopologyStar }
