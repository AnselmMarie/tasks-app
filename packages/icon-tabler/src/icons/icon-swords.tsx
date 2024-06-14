/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSwords = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 3v5l-11 9-4 4-3-3 4-4 9-11zM5 13l6 6m3.32-1.68L18 21l3-3-3.365-3.365M10 5.5 8 3H3v5l3 2.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSwords))
export { Memo as IconSwords }
