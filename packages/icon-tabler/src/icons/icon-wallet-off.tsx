/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWalletOff = (_props: any) => {
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
        <Path d="M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3" />
        <Path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
        <Path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWalletOff))
export { Memo as IconWalletOff }
