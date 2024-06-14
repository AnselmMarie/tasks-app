/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTicTac = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6h18m-9-9v18m-8-5 4 4m-4 0 4-4m8-12 4 4m-4 0 4-4m-4 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTicTac))
export { Memo as IconTicTac }
