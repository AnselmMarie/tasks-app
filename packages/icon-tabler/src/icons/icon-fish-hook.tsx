/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFishHook = (_props: any) => {
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
        <Path d="M16 9v6a5 5 0 0 1-10 0v-4l3 3" />
        <Path d="M14 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFishHook))
export { Memo as IconFishHook }
