/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitCompare = (_props: any) => {
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
        <Path d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M11 6h5a2 2 0 0 1 2 2v8" />
        <Path d="m14 9-3-3 3-3m-1 15H8a2 2 0 0 1-2-2V8" />
        <Path d="m10 15 3 3-3 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGitCompare))
export { Memo as IconGitCompare }
