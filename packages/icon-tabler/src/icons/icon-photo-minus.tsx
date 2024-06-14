/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhotoMinus = (_props: any) => {
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
        <Path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9" />
        <Path d="m3 16 5-5c.928-.893 2.072-.893 3 0l4 4" />
        <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2 2m-4 4h6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPhotoMinus))
export { Memo as IconPhotoMinus }
