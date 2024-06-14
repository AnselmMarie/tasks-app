/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTaobao = (_props: any) => {
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
        <Path d="M2 5c.968.555 1.335 1.104 2 2m-2 3c5.007 3.674 2.85 6.544 0 10m8-16c-.137 4.137-2.258 5.286-3.709 6.684M10 6c2.194-.8 3.736-.852 6.056-.993 4.206-.158 5.523 2.264 5.803 5.153.428 4.396-.077 7.186-2.117 9.298-1.188 1.23-3.238 2.62-7.207.259M11 10h6m-4 0v6.493M8 13h10m-2 2.512.853 1.72" />
        <Path d="M16.5 17c-1.145.361-7 3-8.5-.5m3.765-7.961L10 11" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTaobao))
export { Memo as IconBrandTaobao }
