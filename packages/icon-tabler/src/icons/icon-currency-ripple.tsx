/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyRipple = (_props: any) => {
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
        <Path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m10-5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M10 12h3l2-2.5m0 5L13 12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyRipple))
export { Memo as IconCurrencyRipple }
