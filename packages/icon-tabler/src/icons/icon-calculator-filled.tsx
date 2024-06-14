/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCalculatorFilled = (_props: any) => {
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
          d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM8 17a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 9 18.01l-.007-.127A1 1 0 0 0 8 17m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 18.01l-.007-.127A1 1 0 0 0 12 17m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 17 18.01l-.007-.127A1 1 0 0 0 16 17m-8-4a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 9 14.01l-.007-.127A1 1 0 0 0 8 13m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 14.01l-.007-.127A1 1 0 0 0 12 13m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 17 14.01l-.007-.127A1 1 0 0 0 16 13m-1-7H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCalculatorFilled))
export { Memo as IconCalculatorFilled }
