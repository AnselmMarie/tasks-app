/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInnerShadowBottom = (_props: any) => {
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
        <Path d="M18.364 18.364A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728" />
        <Path d="M7.757 16.243a6 6 0 0 0 8.486 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconInnerShadowBottom))
export { Memo as IconInnerShadowBottom }
