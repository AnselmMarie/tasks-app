/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareAsteriskFilled = (_props: any) => {
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
          d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5.5a1 1 0 0 0-1 1v1.631l-1.445-.963-.101-.06a1 1 0 0 0-1.009 1.724L10.195 12l-1.75 1.169-.093.07a1 1 0 0 0 1.203 1.594L11 13.868V15.5l.007.117A1 1 0 0 0 13 15.5v-1.631l1.445.963.101.06a1 1 0 0 0 1.009-1.724l-1.752-1.169 1.752-1.167.093-.07a1 1 0 0 0-1.203-1.594L13 10.13V8.5l-.007-.117A1 1 0 0 0 12 7.5"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareAsteriskFilled))
export { Memo as IconSquareAsteriskFilled }
