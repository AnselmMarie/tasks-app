/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCandle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 21h6v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm3-18 1.465 1.638a2 2 0 1 1-3.015.099z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCandle))
export { Memo as IconCandle }
