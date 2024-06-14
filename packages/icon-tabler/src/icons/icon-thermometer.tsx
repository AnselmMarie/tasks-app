/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconThermometer = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 5a2.828 2.828 0 0 1 0 4l-8 8H7v-4l8-8a2.828 2.828 0 0 1 4 0m-3 2-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconThermometer))
export { Memo as IconThermometer }
