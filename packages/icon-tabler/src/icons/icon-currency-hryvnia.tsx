/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyHryvnia = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7a2.64 2.64 0 0 1 2.562-2h3.376A2.64 2.64 0 0 1 16.5 7a2.57 2.57 0 0 1-1.344 2.922L9.28 12.86A3.338 3.338 0 0 0 7.5 16.5a3.11 3.11 0 0 0 3.05 2.5h2.888A2.64 2.64 0 0 0 16 17M6 10h12M6 14h12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyHryvnia))
export { Memo as IconCurrencyHryvnia }
