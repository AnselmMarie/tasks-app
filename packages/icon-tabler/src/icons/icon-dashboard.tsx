/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDashboard = (_props: any) => {
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
        <Path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0m3.45-1.45L15.5 9.5" />
        <Path d="M6.4 20a9 9 0 1 1 11.2 0z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDashboard))
export { Memo as IconDashboard }
