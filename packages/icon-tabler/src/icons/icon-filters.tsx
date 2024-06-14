/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilters = (_props: any) => {
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
        <Path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8" />
        <Path d="M8 11a5 5 0 1 0 3.998 1.997" />
        <Path d="M12.002 19.003A5 5 0 1 0 16 11" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFilters))
export { Memo as IconFilters }
