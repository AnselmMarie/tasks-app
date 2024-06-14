/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderTransgender = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7-3 6-6m0 4V3h-4M9 9 3 3m0 4V3h4M5.5 8.5l3-3M12 16v5m-2.5-2h5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderTransgender))
export { Memo as IconGenderTransgender }
