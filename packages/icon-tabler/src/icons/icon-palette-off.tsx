/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaletteOff = (_props: any) => {
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
        <Path d="M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21 9 9 0 0 1 5.628 5.644M8 4c1.236-.623 2.569-1 4-1 4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.516 4.516 0 0 1-1.127.73" />
        <Path d="M7.5 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPaletteOff))
export { Memo as IconPaletteOff }
