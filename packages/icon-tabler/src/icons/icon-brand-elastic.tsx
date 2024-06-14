/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandElastic = (_props: any) => {
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
        <Path d="M14 2a5 5 0 0 1 5 5c0 .712-.232 1.387-.5 2 1.894.042 3.5 1.595 3.5 3.5 0 1.869-1.656 3.4-3.5 3.5.333.625.5 1.125.5 1.5a2.5 2.5 0 0 1-2.5 2.5c-.787 0-1.542-.432-2-1-.786 1.73-2.476 3-4.5 3a5 5 0 0 1-4.583-7 3.5 3.5 0 0 1-.11-6.992h.195a2.5 2.5 0 0 1 2-4c.787 0 1.542.432 2 1 .786-1.73 2.476-3 4.5-3zM8.5 9l-3-1" />
        <Path d="m9.5 5-1 4 1 2 5 2 4-4m-.001 7-3-.5-1-2.5m.001 6 1-3.5M5.417 15 9.5 11" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandElastic))
export { Memo as IconBrandElastic }
