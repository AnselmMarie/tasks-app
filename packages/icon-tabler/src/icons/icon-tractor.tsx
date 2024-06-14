/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTractor = (_props: any) => {
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
        <Path d="M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6.5 0H17" />
        <Path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" />
        <Path d="M18 5h-1a1 1 0 0 0-1 1v4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTractor))
export { Memo as IconTractor }
