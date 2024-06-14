/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignal_4g = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 8v3a1 1 0 0 0 1 1h3m0-4v8m7-8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSignal_4g))
export { Memo as IconSignal_4g }
