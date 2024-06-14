/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpider = (_props: any) => {
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
        <Path d="M5 4v2l5 5M2.5 9.5 4 11h6m-6 8v-2l6-6m9-7v2l-5 5m7.5-1.5L20 11h-6m6 8v-2l-6-6" />
        <Path d="M8 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSpider))
export { Memo as IconSpider }
