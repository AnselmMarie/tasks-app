/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumbers = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10V3L6 5m0 11a2 2 0 1 1 4 0c0 .591-.601 1.46-1 2l-3 3h4m5-7a2 2 0 1 0 2-2 2 2 0 1 0-2-2m-8.5 0h3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumbers))
export { Memo as IconNumbers }
