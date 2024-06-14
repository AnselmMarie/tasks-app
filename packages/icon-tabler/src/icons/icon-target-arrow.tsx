/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTargetArrow = (_props: any) => {
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
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M12 7a5 5 0 1 0 5 5" />
        <Path d="M13 3.055A9 9 0 1 0 20.941 11" />
        <Path d="M15 6v3h3l3-3h-3V3zm0 3-3 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTargetArrow))
export { Memo as IconTargetArrow }
