/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandEvernote = (_props: any) => {
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
        <Path d="M4 8h5V3" />
        <Path d="M17.9 19c.6-2.5 1.1-5.471 1.1-9 0-4.5-2-5-3-5-1.906 0-3-.5-3.5-1-.354-.354-.5-1-1.5-1H9L4 8c0 6 2.5 8 5 8 1 0 1.5-.5 2-1.5s1.414-.326 2.5 0c1.044.313 2.01.255 2.5.5 1 .5 2 1.5 2 3 0 .5 0 3-3 3s-3-3-1-3m1-8h1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandEvernote))
export { Memo as IconBrandEvernote }
