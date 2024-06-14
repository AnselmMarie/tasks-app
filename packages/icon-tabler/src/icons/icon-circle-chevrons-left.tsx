/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleChevronsLeft = (_props: any) => {
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
        <Path d="m15 15-3-3 3-3m-4 6-3-3 3-3" />
        <Path d="M21 12a9 9 0 1 0 0 .265z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCircleChevronsLeft))
export { Memo as IconCircleChevronsLeft }
