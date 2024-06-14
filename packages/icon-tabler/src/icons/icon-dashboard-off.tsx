/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDashboardOff = (_props: any) => {
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
        <Path d="M11.175 11.178a2 2 0 1 0 2.653 2.634M14.5 10.5l1-1" />
        <Path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488A9.008 9.008 0 0 1 17.6 20H6.4a9 9 0 0 1-.268-13.87M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDashboardOff))
export { Memo as IconDashboardOff }
