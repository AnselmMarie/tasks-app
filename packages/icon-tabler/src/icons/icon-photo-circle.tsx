/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhotoCircle = (_props: any) => {
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
        <Path d="M15 8h.01M4 15l4-4c.928-.893 2.072-.893 3 0l5 5" />
        <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2 2" />
        <Path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPhotoCircle))
export { Memo as IconPhotoCircle }