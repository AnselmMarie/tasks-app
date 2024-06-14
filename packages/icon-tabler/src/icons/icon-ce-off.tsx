/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCeOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a7.99 7.99 0 0 0-2.581.426M5.867 5.864A8 8 0 0 0 11 20m9-16a8 8 0 0 0-7.29 4.7M12 12a8 8 0 0 0 8 8m-4-8h4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCeOff))
export { Memo as IconCeOff }
