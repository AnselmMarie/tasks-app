/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSolidjs = (_props: any) => {
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
        <Path d="M2 17.5c4.667 3 8 4.5 10 4.5 2.5 0 4-1.5 4-3.5S14.5 15 12 15c-2 0-5.333.833-10 2.5" />
        <Path d="M5 13.5c4.667-1.667 8-2.5 10-2.5 2.5 0 4 1.5 4 3.5 0 .738-.204 1.408-.588 1.96l-2.883 3.825M22 6.5C18 3.5 14 2 12 2c-2.04 0-2.618.463-3.419 1.545M2 17.5l3-4m17-7-3 4M8.581 3.545 5.628 7.256" />
        <Path d="M7.416 12.662C5.906 12.186 5 11.183 5 9.5 5 7 6.5 6 9 6c1.688 0 5.087 1.068 8.198 3.204A114.76 114.76 0 0 1 19 10.5l-2.302.785" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSolidjs))
export { Memo as IconBrandSolidjs }
