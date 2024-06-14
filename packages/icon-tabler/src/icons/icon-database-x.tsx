/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDatabaseX = (_props: any) => {
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
        <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
        <Path d="M4 6v6c0 1.657 3.582 3 8 3 .537 0 1.062-.02 1.57-.058M20 13.5V6" />
        <Path d="M4 12v6c0 1.657 3.582 3 8 3 .384 0 .762-.01 1.132-.03M22 22l-5-5m0 5 5-5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDatabaseX))
export { Memo as IconDatabaseX }
