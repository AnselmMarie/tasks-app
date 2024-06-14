/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDice_4 = (_props: any) => {
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
        <Path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" />
        <Circle cx={15.5} cy={8.5} r={0.5} fill="currentColor" />
        <Circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" />
        <Circle cx={8.5} cy={15.5} r={0.5} fill="currentColor" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDice_4))
export { Memo as IconDice_4 }
