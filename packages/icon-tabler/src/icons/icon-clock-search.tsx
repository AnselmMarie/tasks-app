/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClockSearch = (_props: any) => {
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
        <Path d="M20.993 11.646a9 9 0 1 0-9.318 9.348" />
        <Path d="M12 7v5l1 1m2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconClockSearch))
export { Memo as IconClockSearch }
