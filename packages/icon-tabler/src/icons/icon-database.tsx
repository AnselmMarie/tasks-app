/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDatabase = (_props: any) => {
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
        <Path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
        <Path d="M4 6v6a8 3 0 0 0 16 0V6" />
        <Path d="M4 12v6a8 3 0 0 0 16 0v-6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDatabase))
export { Memo as IconDatabase }
