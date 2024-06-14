/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVaccineOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1-.5.5m-2 2-4 4H6v-4l4-4m2-2 .5-.5m-5 5L9 14m-6 7 3-3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVaccineOff))
export { Memo as IconVaccineOff }
