/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAdjustmentsHeart = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m6-16v8.5M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v2.5M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.242 2.242 0 0 0-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAdjustmentsHeart))
export { Memo as IconAdjustmentsHeart }
