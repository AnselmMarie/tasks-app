/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapRoute = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3zm6 5v.01M6 13v.01M17 15l-4-4m0 4 4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapRoute))
export { Memo as IconMapRoute }