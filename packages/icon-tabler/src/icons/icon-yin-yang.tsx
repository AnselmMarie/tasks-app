/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconYinYang = (_props: any) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M12 3a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9" />
        <Circle cx={12} cy={7.5} r={0.5} fill="currentColor" />
        <Circle cx={12} cy={16.5} r={0.5} fill="currentColor" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconYinYang))
export { Memo as IconYinYang }
