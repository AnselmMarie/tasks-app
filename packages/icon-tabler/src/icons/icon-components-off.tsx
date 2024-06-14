/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconComponentsOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 12 3 3 3-3-3-3zm15.5 2.5L21 12l-3-3-2.5 2.5m-3.001-2.999L15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3zM3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconComponentsOff))
export { Memo as IconComponentsOff }
