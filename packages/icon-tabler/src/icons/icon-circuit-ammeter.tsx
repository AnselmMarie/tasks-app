/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircuitAmmeter = (_props: any) => {
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
        <Path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m0 0H2m17 0h3" />
        <Path d="M10 14v-3c0-1.036.895-2 2-2s2 .964 2 2v3m0-2h-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCircuitAmmeter))
export { Memo as IconCircuitAmmeter }
