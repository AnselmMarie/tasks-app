/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTidal = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5.333 6 3.334 3.25L12 6l3.333 3.25L18.667 6 22 9.25l-3.333 3.25-3.334-3.25L12 12.5l3.333 3.25L12 19l-3.333-3.25L12 12.5 8.667 9.25 5.333 12.5 2 9.25z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTidal))
export { Memo as IconBrandTidal }
