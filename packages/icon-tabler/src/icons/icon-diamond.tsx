/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiamond = (_props: any) => {
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
        <Path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10z" />
        <Path d="M10 12 8 9.8l.6-1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDiamond))
export { Memo as IconDiamond }
