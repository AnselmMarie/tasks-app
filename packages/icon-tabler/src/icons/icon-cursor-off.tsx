/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCursorOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1-3 3m6-16a3 3 0 0 0-3 3v1m0 4v5a3 3 0 0 0 3 3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCursorOff))
export { Memo as IconCursorOff }
