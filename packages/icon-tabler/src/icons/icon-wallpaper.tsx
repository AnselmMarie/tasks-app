/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWallpaper = (_props: any) => {
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
        <Path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" />
        <Path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M8 18V6a2 2 0 1 0-4 0v12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWallpaper))
export { Memo as IconWallpaper }