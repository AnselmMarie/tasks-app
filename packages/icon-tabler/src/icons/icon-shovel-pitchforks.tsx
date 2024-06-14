/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShovelPitchforks = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3h4M7 3v12m-3 0h6v3a3 3 0 0 1-6 0zm10 6v-3a3 3 0 0 1 6 0v3m-3 0V3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShovelPitchforks))
export { Memo as IconShovelPitchforks }
