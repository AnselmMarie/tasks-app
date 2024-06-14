/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandVite = (_props: any) => {
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
        <Path d="M10 4.5 16 3l-2 6.5 2-.5-4 7v-5l-3 1z" />
        <Path d="M15 6.5 22 5 12 22 2 5l7.741 1.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandVite))
export { Memo as IconBrandVite }
