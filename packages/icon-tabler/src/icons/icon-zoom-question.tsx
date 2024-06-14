/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZoomQuestion = (_props: any) => {
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
        <Path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6m-5-2v.01" />
        <Path d="M10 10a1.5 1.5 0 1 0-1.14-2.474" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZoomQuestion))
export { Memo as IconZoomQuestion }
