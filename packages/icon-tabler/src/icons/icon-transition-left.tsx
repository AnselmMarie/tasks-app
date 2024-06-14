/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTransitionLeft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m15 3v12a3 3 0 0 1-6 0V6a3 3 0 0 1 6 0m-6 6H7m3-3-3 3 3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTransitionLeft))
export { Memo as IconTransitionLeft }
