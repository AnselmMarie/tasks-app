/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandWordpress = (_props: any) => {
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
        <Path d="M9.5 9h3M4 9h2.5M11 9l3 11 4-9M5.5 9 9 20l3-7m6-2c.177-.528 1-1.364 1-2.5 0-1.78-.776-2.5-1.875-2.5C16.227 6 16 6.812 16 7.429c0 1.83 2 2.058 2 3.571" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandWordpress))
export { Memo as IconBrandWordpress }
