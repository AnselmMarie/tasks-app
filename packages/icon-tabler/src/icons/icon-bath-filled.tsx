/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBathFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="M11 2a1 1 0 0 1 .993.883L12 3v2.25a1 1 0 0 1-1.993.117L10 5.25V4H8a1 1 0 0 0-.993.883L7 5v6h13a2 2 0 0 1 1.995 1.85L22 13v3c0 1.475-.638 2.8-1.654 3.715l.486.73a1 1 0 0 1-1.594 1.203l-.07-.093-.55-.823a4.98 4.98 0 0 1-1.337.26L17 21H7a4.994 4.994 0 0 1-1.619-.268l-.549.823a1 1 0 0 1-1.723-1.009l.059-.1.486-.73a4.987 4.987 0 0 1-1.647-3.457L2 16v-3a2 2 0 0 1 1.85-1.995L4 11h1V5a3 3 0 0 1 2.824-2.995L8 2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBathFilled))
export { Memo as IconBathFilled }
