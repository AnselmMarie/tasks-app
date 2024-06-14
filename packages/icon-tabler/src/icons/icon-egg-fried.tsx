/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEggFried = (_props: any) => {
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
        <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M14 3a5 5 0 0 1 4.872 6.13 3 3 0 0 1 .178 5.681 3 3 0 1 1-4.684 3.626 5 5 0 1 1-8.662-5 5 5 0 1 1 4.645-8.856A4.982 4.982 0 0 1 14 2.996z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEggFried))
export { Memo as IconEggFried }
