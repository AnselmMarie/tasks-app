/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandBlackberry = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6a1 1 0 0 0-1-1H4l-.5 2H6a1 1 0 0 0 1-1m-1 6a1 1 0 0 0-1-1H3l-.5 2H5a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1h-2l-.5 2H12a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H13a1 1 0 0 0 1-1m-2 12a1 1 0 0 0-1-1H9l-.5 2H11a1 1 0 0 0 1-1m8-3a1 1 0 0 0-1-1h-2l-.5 2H19a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H20a1 1 0 0 0 1-1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandBlackberry))
export { Memo as IconBrandBlackberry }
