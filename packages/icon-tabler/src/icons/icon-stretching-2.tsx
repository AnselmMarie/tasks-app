/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStretching_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6.5 21l3.5-5m-5-5 7-2m4 12-4-7V9l7-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStretching_2))
export { Memo as IconStretching_2 }
