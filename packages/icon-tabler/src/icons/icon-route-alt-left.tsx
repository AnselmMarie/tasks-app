/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRouteAltLeft = (_props: any) => {
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
        <Path d="M8 3H3v5m13-5h5v5" />
        <Path d="m3 3 7.536 7.536A5 5 0 0 1 12 14.07V21m6-14.99V6m-2 2.02v-.01M14 10v.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRouteAltLeft))
export { Memo as IconRouteAltLeft }
