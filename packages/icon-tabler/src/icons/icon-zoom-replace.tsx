/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZoomReplace = (_props: any) => {
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
        <Path d="m21 21-6-6M3.291 8a7 7 0 0 1 5.077-4.806 7.021 7.021 0 0 1 8.242 4.403" />
        <Path d="M17 4v4h-4m3.705 4a7 7 0 0 1-5.074 4.798 7.021 7.021 0 0 1-8.241-4.403" />
        <Path d="M3 16v-4h4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZoomReplace))
export { Memo as IconZoomReplace }
