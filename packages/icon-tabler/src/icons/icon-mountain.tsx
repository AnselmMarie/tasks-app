/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMountain = (_props: any) => {
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
        <Path d="M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0z" />
        <Path d="m7.5 11 2 2.5L12 11l2 3 2.5-2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMountain))
export { Memo as IconMountain }
