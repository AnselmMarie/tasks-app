/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBuildingCircus = (_props: any) => {
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
        <Path d="M4 11h16m-8-4.5c0 1-5 4.5-8 4.5m8-4.5c0 1 5 4.5 8 4.5M6 11c-.333 5.333-1 8.667-2 10h4c1 0 4-4 4-9v-1m6 0c.333 5.333 1 8.667 2 10h-4c-1 0-4-4-4-9v-1" />
        <Path d="M12 7V3l2 1h-2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBuildingCircus))
export { Memo as IconBuildingCircus }
