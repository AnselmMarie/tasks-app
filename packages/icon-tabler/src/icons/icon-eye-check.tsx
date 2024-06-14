/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeCheck = (_props: any) => {
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
        <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M11.102 17.957C7.898 17.65 5.198 15.663 3 12c2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6a19.5 19.5 0 0 1-.663 1.032M15 19l2 2 4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEyeCheck))
export { Memo as IconEyeCheck }
