/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPolygon = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6.5 9.5l3.5-3m4-1L17 7m1.5 3L16 17m-2.5.5-7-5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPolygon))
export { Memo as IconPolygon }
