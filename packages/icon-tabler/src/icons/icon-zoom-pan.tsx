/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZoomPan = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m8 5-2.5-2.5M10 5l2-2 2 2m5 5 2 2-2 2M5 10l-2 2 2 2m5 5 2 2 2-2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconZoomPan))
export { Memo as IconZoomPan }
