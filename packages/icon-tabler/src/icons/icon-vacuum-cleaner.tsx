/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVacuumCleaner = (_props: any) => {
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
        <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
        <Path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 7h.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVacuumCleaner))
export { Memo as IconVacuumCleaner }
