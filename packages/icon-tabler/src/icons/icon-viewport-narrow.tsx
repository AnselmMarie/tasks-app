/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconViewportNarrow = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12h7L7 9m0 6 3-3m11 0h-7l3-3m0 6-3-3M9 6V3h6v3M9 18v3h6v-3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconViewportNarrow))
export { Memo as IconViewportNarrow }
