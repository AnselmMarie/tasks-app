/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGooglePhotos = (_props: any) => {
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
        <Path d="M7.5 7C9.985 7 12 8.974 12 11.409V12H3.603a.61.61 0 0 1-.426-.173.585.585 0 0 1-.177-.418C3 8.974 5.015 7 7.5 7m9 10c-2.485 0-4.5-1.974-4.5-4.409V12h8.397c.333 0 .603.265.603.591C21 15.026 18.985 17 16.5 17" />
        <Path d="M7 16.5c0-2.485 1.972-4.5 4.405-4.5H12v8.392a.61.61 0 0 1-.173.431.584.584 0 0 1-.422.177C8.972 21 7 18.985 7 16.5m10-9c0 2.485-1.972 4.5-4.405 4.5H12V3.603a.61.61 0 0 1 .175-.428.584.584 0 0 1 .42-.175C15.028 3 17 5.015 17 7.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGooglePhotos))
export { Memo as IconBrandGooglePhotos }
