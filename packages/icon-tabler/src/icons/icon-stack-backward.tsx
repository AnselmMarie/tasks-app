/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStackBackward = (_props: any) => {
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
        <Path d="m14 12 6-3-8-4-8 4 6 3" />
        <Path fill="currentColor" d="m10 12-6 3 8 4 8-4-6-3-2 1z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStackBackward))
export { Memo as IconStackBackward }
