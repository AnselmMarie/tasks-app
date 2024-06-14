/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWalk = (_props: any) => {
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
        <Path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l3-4m6 4-2-4-3-3 1-6" />
        <Path d="m6 12 2-3 4-1 3 3 3 1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWalk))
export { Memo as IconWalk }
