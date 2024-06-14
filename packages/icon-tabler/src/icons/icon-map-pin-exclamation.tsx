/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapPinExclamation = (_props: any) => {
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
        <Path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
        <Path d="m15.005 19.31-1.591 1.59a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 13.592-4.638M19 16v3m0 3v.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMapPinExclamation))
export { Memo as IconMapPinExclamation }
