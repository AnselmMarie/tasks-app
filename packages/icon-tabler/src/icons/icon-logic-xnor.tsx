/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLogicXnor = (_props: any) => {
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
        <Path d="M22 12h-2M2 9h4m-4 6h4m-1 4c1.778-4.667 1.778-9.333 0-14m3 0c10.667 2.1 10.667 12.6 0 14 1.806-4.667 1.806-9.333 0-14" />
        <Path d="M16 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLogicXnor))
export { Memo as IconLogicXnor }
