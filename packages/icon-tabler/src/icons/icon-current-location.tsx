/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrentLocation = (_props: any) => {
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
        <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-10v2m0 16v2m8-10h2M2 12h2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrentLocation))
export { Memo as IconCurrentLocation }
