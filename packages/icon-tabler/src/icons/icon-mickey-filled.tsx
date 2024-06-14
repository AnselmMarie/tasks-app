/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMickeyFilled = (_props: any) => {
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
          d="M18.501 2a4.5 4.5 0 0 1 .878 8.913 8 8 0 1 1-15.374 3.372L4 14l.005-.285a7.991 7.991 0 0 1 .615-2.803 4.5 4.5 0 0 1-3.187-6.348 4.505 4.505 0 0 1 3.596-2.539l.225-.018L5.535 2l.244.009a4.5 4.5 0 0 1 4.215 4.247 8.001 8.001 0 0 1 4.013 0A4.5 4.5 0 0 1 18.5 2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMickeyFilled))
export { Memo as IconMickeyFilled }
