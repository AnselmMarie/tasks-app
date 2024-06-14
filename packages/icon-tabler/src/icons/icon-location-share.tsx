/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLocationShare = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-3.616 10.015M16 22l5-5m0 4.5V17h-4.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLocationShare))
export { Memo as IconLocationShare }
