/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGalaxy = (_props: any) => {
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
        <Path d="M12 3c-1.333 1-2 2.5-2 4.5 0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2-.667 3.5-2 4.5" />
        <Path d="M19.794 16.5c-.2-1.655-1.165-2.982-2.897-3.982C14.3 11.018 12 12 12 12s-2.299.982-4.897-.518c-1.732-1-2.698-2.327-2.897-3.982" />
        <Path d="M19.794 7.5c-1.532-.655-3.165-.482-4.897.518C12.3 9.518 12 12 12 12s-.299 2.482-2.897 3.982c-1.732 1-3.365 1.173-4.897.518" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGalaxy))
export { Memo as IconGalaxy }
