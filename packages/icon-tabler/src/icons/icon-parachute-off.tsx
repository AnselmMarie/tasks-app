/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconParachuteOff = (_props: any) => {
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
        <Path d="M22 12c0-5.523-4.477-10-10-10-1.737 0-3.37.443-4.794 1.222m-2.28 1.71A9.969 9.969 0 0 0 2 12" />
        <Path d="M22 12c0-1.66-1.46-3-3.25-3-1.63 0-2.973 1.099-3.212 2.54m-.097-.09c-.23-1.067-1.12-1.935-2.29-2.284m-3.445.568C8.967 10.284 8.5 11.094 8.5 12c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12m0 0 10 10-3.5-10m6.082 2.624L12 22l4.992-4.992m2.014-2.014 3-3M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconParachuteOff))
export { Memo as IconParachuteOff }
