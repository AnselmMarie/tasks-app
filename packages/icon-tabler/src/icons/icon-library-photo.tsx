/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLibraryPhoto = (_props: any) => {
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
        <Path d="M7 5.667A2.667 2.667 0 0 1 9.667 3h8.666A2.667 2.667 0 0 1 21 5.667v8.666A2.667 2.667 0 0 1 18.333 17H9.667A2.667 2.667 0 0 1 7 14.333z" />
        <Path d="M4.012 7.26A2.005 2.005 0 0 0 3 8.997v10c0 1.1.9 2 2 2h10c.75 0 1.158-.385 1.5-1M17 7h.01" />
        <Path d="m7 13 3.644-3.644a1.21 1.21 0 0 1 1.712 0L16 13" />
        <Path d="m15 12 1.644-1.644a1.21 1.21 0 0 1 1.712 0L21 13" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLibraryPhoto))
export { Memo as IconLibraryPhoto }
