/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBackUpDouble = (_props: any) => {
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
        <Path d="m13 14-4-4 4-4m-5 8-4-4 4-4" />
        <Path d="M9 10h7a4 4 0 1 1 0 8h-1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBackUpDouble))
export { Memo as IconArrowBackUpDouble }
