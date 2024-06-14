/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSnowboarding = (_props: any) => {
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
        <Path d="M15 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 19l4-2.5-.5-1.5m5.5 6-1-6-4.5-3L14 6" />
        <Path d="m7 9 1.5-3H14l2 4 3 1M3 17c.399 1.154.899 1.805 1.5 1.951 6 1.464 10.772 2.262 13.5 2.927 1.333.325 2.333 0 3-.976" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSnowboarding))
export { Memo as IconSnowboarding }
