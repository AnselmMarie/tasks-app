/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsShuffle_2 = (_props: any) => {
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
        <Path d="m18 4 3 3-3 3m0 10 3-3-3-3" />
        <Path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" />
        <Path d="M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsShuffle_2))
export { Memo as IconArrowsShuffle_2 }
