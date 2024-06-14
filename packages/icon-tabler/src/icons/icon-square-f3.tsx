/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareF3 = (_props: any) => {
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
        <Path d="M13 9.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H14h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5M8 12h2m0-3H8v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareF3))
export { Memo as IconSquareF3 }
