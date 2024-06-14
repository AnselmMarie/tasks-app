/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHttpTrace = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8h4M5 8v8m5-4h2a2 2 0 1 0 0-4h-2v8m4 0-3-4m6 4v-6a2 2 0 1 1 4 0v6m-4-3h4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHttpTrace))
export { Memo as IconHttpTrace }
