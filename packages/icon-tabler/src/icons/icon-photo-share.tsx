/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhotoShare = (_props: any) => {
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
        <Path d="M15 8h.01M12 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7" />
        <Path d="m3 16 5-5c.928-.893 2.072-.893 3 0l3 3m0 0 1-1c.928-.893 2.072-.893 3 0m-2 9 5-5m0 4.5V17h-4.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPhotoShare))
export { Memo as IconPhotoShare }
