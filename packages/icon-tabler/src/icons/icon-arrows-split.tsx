/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsSplit = (_props: any) => {
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
        <Path d="M21 17h-8l-3.5-5H3m18-5h-8l-3.495 5" />
        <Path d="m18 10 3-3-3-3m0 16 3-3-3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsSplit))
export { Memo as IconArrowsSplit }
