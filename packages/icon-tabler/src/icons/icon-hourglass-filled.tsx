/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassFilled = (_props: any) => {
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
          d="M17 2a2 2 0 0 1 1.995 1.85L19 4v2a6.996 6.996 0 0 1-3.393 6 6.994 6.994 0 0 1 3.388 5.728L19 18v2a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20v-2a6.996 6.996 0 0 1 3.393-6 6.994 6.994 0 0 1-3.388-5.728L5 6V4a2 2 0 0 1 1.85-1.995L7 2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassFilled))
export { Memo as IconHourglassFilled }
