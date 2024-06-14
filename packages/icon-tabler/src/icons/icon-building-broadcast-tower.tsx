/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBuildingBroadcastTower = (_props: any) => {
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
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M16.616 13.924a5 5 0 1 0-9.23 0" />
        <Path d="M20.307 15.469a9 9 0 1 0-16.615 0" />
        <Path d="m9 21 3-9 3 9m-5-2h4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBuildingBroadcastTower))
export { Memo as IconBuildingBroadcastTower }
