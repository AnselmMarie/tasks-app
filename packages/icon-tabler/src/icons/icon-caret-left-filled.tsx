/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretLeftFilled = (_props: any) => {
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
          d="m13.883 5.007.058-.005h.118l.058.005.06.009.052.01.108.032.067.027.132.07.09.065.081.073.083.094.054.077.054.096.017.036.027.067.032.108.01.053.01.06.004.057L15 6v12c0 .852-.986 1.297-1.623.783l-.084-.076-6-6a1 1 0 0 1-.083-1.32l.083-.094 6-6 .094-.083.077-.054.096-.054.036-.017.067-.027.108-.032.053-.01.06-.01z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCaretLeftFilled))
export { Memo as IconCaretLeftFilled }
