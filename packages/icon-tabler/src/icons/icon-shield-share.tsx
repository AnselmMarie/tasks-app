/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldShare = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21A12 12 0 0 1 3.5 6 12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1 .193 6.025M16 22l5-5m0 4.5V17h-4.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldShare))
export { Memo as IconShieldShare }