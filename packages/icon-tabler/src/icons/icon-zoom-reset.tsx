/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZoomReset = (_props: any) => {
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
        <Path d="m21 21-6-6M3.268 12.043A7.017 7.017 0 0 0 9.902 17a7.012 7.012 0 0 0 7.043-6.131 7 7 0 0 0-5.314-7.672A7.021 7.021 0 0 0 3.39 7.6" />
        <Path d="M3 4v4h4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZoomReset))
export { Memo as IconZoomReset }
