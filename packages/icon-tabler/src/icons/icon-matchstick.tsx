/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMatchstick = (_props: any) => {
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
        <Path d="m3 21 14-9m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="m17 3 3.62 7.29a4.007 4.007 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMatchstick))
export { Memo as IconMatchstick }
