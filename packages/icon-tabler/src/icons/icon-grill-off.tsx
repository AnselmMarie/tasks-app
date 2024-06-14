/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGrillOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8H5a6 6 0 0 0 6 6h2c.315 0 .624-.024.926-.071m2.786-1.214a5.99 5.99 0 0 0 2.284-4.49V8h-7m6.831 10.815a2 2 0 1 1-2.663-2.633M9 14l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGrillOff))
export { Memo as IconGrillOff }
