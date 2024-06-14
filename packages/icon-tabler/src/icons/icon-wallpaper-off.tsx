/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWallpaperOff = (_props: any) => {
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
        <Path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6" />
        <Path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M8 18V8M4.573 4.598A2.003 2.003 0 0 0 4 6v12M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWallpaperOff))
export { Memo as IconWallpaperOff }
