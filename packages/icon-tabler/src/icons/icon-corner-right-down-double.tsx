/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCornerRightDownDouble = (_props: any) => {
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
        <Path d="M5 4h6a3 3 0 0 1 3 3v7" />
        <Path d="m10 10 4 4 4-4m-8 5 4 4 4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCornerRightDownDouble))
export { Memo as IconCornerRightDownDouble }
