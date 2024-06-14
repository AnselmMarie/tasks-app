/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSublimeText = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 8 5 12.5V7l14-4.5zm0 9L5 21.5V16l14-4.5zm0-5.5L5 7m0 5.5L19 17"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSublimeText))
export { Memo as IconBrandSublimeText }
