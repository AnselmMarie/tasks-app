/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiaboloPlus = (_props: any) => {
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
        <Path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
        <Path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3 .17 0 .34-.002.508-.006M18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
        <Path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2m-2 7h6m-3-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDiaboloPlus))
export { Memo as IconDiaboloPlus }
