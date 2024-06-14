/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLoopLeft_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M13 21v-6m0-6V8a4 4 0 1 1 4 4H4" />
        <Path d="m8 16-4-4 4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLoopLeft_2))
export { Memo as IconArrowLoopLeft_2 }