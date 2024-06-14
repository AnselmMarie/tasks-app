/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandUnity = (_props: any) => {
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
        <Path d="m14 3 6 4v7m-2 3-6 4-6-4m-2-3V7l6-4" />
        <Path d="m4 7 8 5v9m8-14-8 5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandUnity))
export { Memo as IconBrandUnity }
