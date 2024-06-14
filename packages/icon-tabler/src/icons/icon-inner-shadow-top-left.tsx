/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInnerShadowTopLeft = (_props: any) => {
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
        <Path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18" />
        <Path d="M6 12a6 6 0 0 1 6-6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconInnerShadowTopLeft))
export { Memo as IconInnerShadowTopLeft }
