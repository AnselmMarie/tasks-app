/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadar = (_props: any) => {
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
        <Path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" />
        <Path d="M16 9a5 5 0 1 0-7 7" />
        <Path d="M20.486 9A9 9 0 1 0 9.004 20.495" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRadar))
export { Memo as IconRadar }
