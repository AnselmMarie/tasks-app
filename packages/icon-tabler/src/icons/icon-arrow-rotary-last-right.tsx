/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowRotaryLastRight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v6m2.5-11.5L18 3m-5 0h5v5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowRotaryLastRight))
export { Memo as IconArrowRotaryLastRight }
