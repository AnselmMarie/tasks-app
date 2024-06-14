/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMaximize = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4h4v4m-6 2 6-6M8 20H4v-4m0 4 6-6m6 6h4v-4m-6-2 6 6M8 4H4v4m0-4 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMaximize))
export { Memo as IconArrowsMaximize }
