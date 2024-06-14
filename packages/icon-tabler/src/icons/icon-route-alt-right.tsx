/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRouteAltRight = (_props: any) => {
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
        <Path d="M16 3h5v5M8 3H3v5" />
        <Path d="m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M6 6.01V6m2 2.02v-.01M10 10v.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRouteAltRight))
export { Memo as IconRouteAltRight }
