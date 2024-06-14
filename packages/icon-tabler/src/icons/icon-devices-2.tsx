/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDevices_2 = (_props: any) => {
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
        <Path d="M10 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6m3 0a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zM7 19h3m7-11v.01" />
        <Path d="M16 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-7-1v4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDevices_2))
export { Memo as IconDevices_2 }
