/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileTypeTxt = (_props: any) => {
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
        <Path d="M14 3v4a1 1 0 0 0 1 1h4m-2.5 7h3" />
        <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4.5 15h3M6 15v6m12-6v6m-8-6 4 6m-4 0 4-6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFileTypeTxt))
export { Memo as IconFileTypeTxt }
