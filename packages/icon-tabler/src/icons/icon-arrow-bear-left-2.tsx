/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBearLeft_2 = (_props: any) => {
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
        <Path d="M9 3H4v5" />
        <Path d="m4 3 7.536 7.536A5 5 0 0 1 13 14.07V21m7-16-4.5 4.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBearLeft_2))
export { Memo as IconArrowBearLeft_2 }
