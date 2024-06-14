/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPolygonOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6.5 9.5l1.546-1.311M14 5.5 17 7m1.5 3-1.185 3.318m-1.062 2.972L16 17m-2.5.5-7-5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPolygonOff))
export { Memo as IconPolygonOff }
