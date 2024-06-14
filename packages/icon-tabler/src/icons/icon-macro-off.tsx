/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMacroOff = (_props: any) => {
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
        <Path d="M6 15a6 6 0 0 0 11.47 2.467" />
        <Path d="M15.53 15.53A6 6 0 0 0 12 21" />
        <Path d="M12 21a6 6 0 0 0-6-6m6 6V11m-1.134-.13a5.007 5.007 0 0 1-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMacroOff))
export { Memo as IconMacroOff }
