/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMinimize = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9h4V5M3 3l6 6m-4 6h4v4m-6 2 6-6m10-6h-4V5m0 4 6-6m-2 12h-4v4m0-4 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMinimize))
export { Memo as IconArrowsMinimize }
