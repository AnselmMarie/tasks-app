/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWorldOff = (_props: any) => {
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
        <Path d="M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672-2.322A9 9 0 0 0 7.98 3.948M3.6 9H9m4 0h7.4M3.6 15H15m4 0h1.4" />
        <Path d="M11.5 3a17.001 17.001 0 0 0-1.493 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833m1-18a16.982 16.982 0 0 1 2.549 8.005m-.207 3.818A16.979 16.979 0 0 1 12.5 21M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWorldOff))
export { Memo as IconWorldOff }
