/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyRiyal = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 9v2a2 2 0 1 1-4 0v-1 1a2 2 0 1 1-4 0v-1 4a2 2 0 1 1-4 0v-2m15 .01V12m4-2v1a5 5 0 0 1-5 5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyRiyal))
export { Memo as IconCurrencyRiyal }
