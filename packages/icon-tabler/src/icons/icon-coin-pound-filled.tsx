/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCoinPoundFilled = (_props: any) => {
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
          d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M13 6a3 3 0 0 0-3 3v2H9a1 1 0 0 0-.993.883L8 12a1 1 0 0 0 1 1h1v1a1 1 0 0 1-.77.974l-.113.02L9 15c-1.287 0-1.332 1.864-.133 1.993L9 17h6a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 15 15h-3.171l.048-.148A3 3 0 0 0 12 14v-1h1a1 1 0 0 0 .993-.883L14 12a1 1 0 0 0-1-1h-1V9a1 1 0 0 1 .883-.993L13 8a1 1 0 0 1 .993.883L14 9a1 1 0 0 0 2 0 3 3 0 0 0-3-3"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCoinPoundFilled))
export { Memo as IconCoinPoundFilled }
