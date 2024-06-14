/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGymnastics = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 14 1-9 7-6M3 11h6l5 1m-2.5-3.5L16 5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGymnastics))
export { Memo as IconGymnastics }
