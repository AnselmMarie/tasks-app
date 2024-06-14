/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSportBillard = (_props: any) => {
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
        <Path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSportBillard))
export { Memo as IconSportBillard }