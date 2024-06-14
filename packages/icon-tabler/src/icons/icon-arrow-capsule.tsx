/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowCapsule = (_props: any) => {
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
        <Path d="M18 15a6 6 0 1 1-12 0V9a6 6 0 1 1 12 0v2" />
        <Path d="m15 8 3 3 3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowCapsule))
export { Memo as IconArrowCapsule }
