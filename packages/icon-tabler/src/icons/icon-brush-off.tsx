/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrushOff = (_props: any) => {
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
        <Path d="M3 17a4 4 0 1 1 4 4H3z" />
        <Path d="M21 3a16 16 0 0 0-9.309 4.704M9.896 9.916A15.993 15.993 0 0 0 8.2 13.2M21 3a16 16 0 0 1-4.697 9.302m-2.195 1.786A15.993 15.993 0 0 1 10.8 15.8M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrushOff))
export { Memo as IconBrushOff }
