/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBuildingWindTurbine = (_props: any) => {
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
        <Path d="M10 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M10 11V8.427c0-.18.013-.358.04-.536l.716-4.828C10.82 2.466 11.353 2 12 2s1.18.466 1.244 1.063l.716 4.828c.027.178.04.357.04.536V11" />
        <Path d="m13.01 9.28 2.235 1.276c.156.09.305.19.446.3l3.836 2.911c.487.352.624 1.04.3 1.596-.325.556-1 .782-1.548.541l-4.555-1.68a3.624 3.624 0 0 1-.486-.231l-2.235-1.277" />
        <Path d="m13 12.716-2.236 1.277a3.624 3.624 0 0 1-.485.23l-4.555 1.681c-.551.241-1.223.015-1.548-.54-.324-.557-.187-1.245.3-1.597l3.836-2.91a3.41 3.41 0 0 1 .446-.3l2.235-1.277M7 21h10m-7 0 1-7m2 0 1 7" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBuildingWindTurbine))
export { Memo as IconBuildingWindTurbine }
