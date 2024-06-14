/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlipFlops = (_props: any) => {
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
        <Path d="M18 4c2.21 0 4 1.682 4 3.758 0 .078 0 .156-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014c-.138-2.071 1.538-3.855 3.743-3.985a4.15 4.15 0 0 1 .25-.007z" />
        <Path d="M14.5 14c1-3.333 2.167-5 3.5-5 1.333 0 2.5 1.667 3.5 5M18 16v1M6 4c2.21 0 4 1.682 4 3.758 0 .078 0 .156-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014C1.87 5.921 3.546 4.137 5.75 4.007 5.834 4.007 5.917 4 6 4" />
        <Path d="M2.5 14c1-3.333 2.167-5 3.5-5 1.333 0 2.5 1.667 3.5 5M6 16v1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFlipFlops))
export { Memo as IconFlipFlops }
