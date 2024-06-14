/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTilde = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12c0-1.657 1.592-3 3.556-3 1.963 0 3.11 1.5 4.444 3 1.333 1.5 2.48 3 4.444 3S20 13.657 20 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTilde))
export { Memo as IconTilde }
