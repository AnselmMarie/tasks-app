/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyDollarGuyanese = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4M10 6H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3v-6H8m9 8v-2m1-12V4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyDollarGuyanese))
export { Memo as IconCurrencyDollarGuyanese }
