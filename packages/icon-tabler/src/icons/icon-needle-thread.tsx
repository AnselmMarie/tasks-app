/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNeedleThread = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M3 21c-.667-.667 3.262-6.236 11.785-16.709a3.5 3.5 0 1 1 5.078 4.791C9.288 17.694 3.667 21.667 3 21M17.5 6.5l-1 1" />
        <Path d="M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11-1.056 1.268-3.363 1.285-5.75.808m-4.511-1.383C4.346 14.86 2 13.5 2 12m17.5-2.5L21 11" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconNeedleThread))
export { Memo as IconNeedleThread }
