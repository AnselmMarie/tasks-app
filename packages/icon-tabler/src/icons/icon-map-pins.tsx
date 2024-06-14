/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapPins = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657zM8 7v.01m10.828 10.818a4 4 0 1 0-5.656 0L16 20.657zM16 15v.01"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapPins))
export { Memo as IconMapPins }
