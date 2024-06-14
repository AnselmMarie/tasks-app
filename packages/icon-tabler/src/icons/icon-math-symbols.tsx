/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMathSymbols = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12h18m-9-9v18m4.5-16.5 3 3m0-3-3 3M6 4v4M4 6h4m10 10h.01M18 20h.01M4 18h4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMathSymbols))
export { Memo as IconMathSymbols }
