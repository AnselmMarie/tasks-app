/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandVk = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4h0V6h4v4.5h.03A4.531 4.531 0 0 0 18 6.004h4l-.342 1.711A6.858 6.858 0 0 1 18 12.504h0a5.34 5.34 0 0 1 3.566 4.111L22 19.004h0-4a4.531 4.531 0 0 0-3.97-4.496v4.5z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandVk))
export { Memo as IconBrandVk }
