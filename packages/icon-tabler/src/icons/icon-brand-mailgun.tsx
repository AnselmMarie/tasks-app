/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Defs, Path, G, Use } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandMailgun = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Defs>
        <Path id="prefix__a" d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </Defs>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M17 12a2 2 0 1 0 4 0 9 9 0 1 0-2.987 6.697" />
        <Path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" />
        <Use href="#prefix__a" />
        <Use href="#prefix__a" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandMailgun))
export { Memo as IconBrandMailgun }
