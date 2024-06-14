/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRepeatOnce = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12V9a3 3 0 0 1 3-3h13m-3-3 3 3-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3-3-3 3-3m4-4 1-1v4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRepeatOnce))
export { Memo as IconRepeatOnce }
