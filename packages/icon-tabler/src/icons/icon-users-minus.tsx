/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsersMinus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4c.948 0 1.818.33 2.504.88M16 3.13a4 4 0 0 1 0 7.75M16 19h6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUsersMinus))
export { Memo as IconUsersMinus }
