/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowRotaryLeft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0v10M13 7H3m4 4L3 7l4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowRotaryLeft))
export { Memo as IconArrowRotaryLeft }
