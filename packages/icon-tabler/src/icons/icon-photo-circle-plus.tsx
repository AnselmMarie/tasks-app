/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhotoCirclePlus = (_props: any) => {
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
        <Path d="M15 8h.01m5.954 4.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.397 8.991" />
        <Path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
        <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0m-2 6.33h6m-3-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPhotoCirclePlus))
export { Memo as IconPhotoCirclePlus }
