/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlaneDeparture = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.639 10.258 4.83-1.294a2 2 0 1 1 1.035 3.863L6.015 16.71l-4.45-5.02 2.897-.776 2.45 1.414 2.897-.776-3.743-6.244 2.898-.777zM3 21h18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlaneDeparture))
export { Memo as IconPlaneDeparture }
