/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileTypeDocx = (_props: any) => {
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
        <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm15 1.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0M9.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 9.5 15m10 0 3 6m-3 0 3-6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFileTypeDocx))
export { Memo as IconFileTypeDocx }
