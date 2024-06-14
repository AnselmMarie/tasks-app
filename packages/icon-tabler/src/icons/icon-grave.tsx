/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGrave = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2zm5-5v-5H6V7h4V3h4v4h4v4h-4v5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGrave))
export { Memo as IconGrave }
