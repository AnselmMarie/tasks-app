/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLanguage = (_props: any) => {
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
        <Path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8" />
        <Path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7 4-9 4 9m-.9-2h-6.2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLanguage))
export { Memo as IconLanguage }
