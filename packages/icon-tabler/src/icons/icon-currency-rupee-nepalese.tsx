/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyRupeeNepalese = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5H4h3a4 4 0 1 1 0 8H4l6 6m11-2-4.586-4.414a2 2 0 0 0-2.828 2.828l.707.707"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyRupeeNepalese))
export { Memo as IconCurrencyRupeeNepalese }
