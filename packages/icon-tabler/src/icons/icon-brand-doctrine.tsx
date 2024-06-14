/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDoctrine = (_props: any) => {
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
        <Path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0m4 0h6" />
        <Path d="m12 11 3 3-3 3M10 3l6.9 6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDoctrine))
export { Memo as IconBrandDoctrine }
