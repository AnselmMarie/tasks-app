/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapDiscount = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13 19-4-2-6 3V7l6-3 6 3 6-3v8.5M9 4v13m6-10v5.5m1 8.5 5-5m0 5v.01M16 16v.01"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapDiscount))
export { Memo as IconMapDiscount }
