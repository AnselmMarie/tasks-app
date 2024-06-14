/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlayVolleyball = (_props: any) => {
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
        <Path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        <Path fill="currentColor" d="M20.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
        <Path d="m2 16 5 1 .5-2.5m4 6.5 2.5-5.5L8.5 12 12 8l3 4 4 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPlayVolleyball))
export { Memo as IconPlayVolleyball }
