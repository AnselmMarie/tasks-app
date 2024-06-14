/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMickey = (_props: any) => {
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
        <Path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7.017 7.017 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3m13 0a3.5 3.5 0 1 1-.826 6.902 7.013 7.013 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3" />
        <Path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMickey))
export { Memo as IconMickey }
