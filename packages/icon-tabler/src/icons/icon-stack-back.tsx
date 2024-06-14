/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStackBack = (_props: any) => {
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
        <Path d="m4 8 8 4 8-4-8-4z" />
        <Path fill="currentColor" d="m12 16-4-2-4 2 8 4 8-4-4-2z" />
        <Path d="m8 10-4 2 4 2m8 0 4-2-4-2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStackBack))
export { Memo as IconStackBack }
