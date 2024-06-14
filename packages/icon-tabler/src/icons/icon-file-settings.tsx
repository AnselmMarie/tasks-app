/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileSettings = (_props: any) => {
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
        <Path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V12m0 4v1.5m3.031-5.25-1.299.75m-3.464 2-1.3.75m6.032.053-1.285-.773m-3.43-2.06L9 12.197M14 3v4a1 1 0 0 0 1 1h4" />
        <Path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFileSettings))
export { Memo as IconFileSettings }
