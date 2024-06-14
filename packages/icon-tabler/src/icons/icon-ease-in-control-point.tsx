/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEaseInControlPoint = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 19c8 0 18-16 18-16m-4 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2m-3 0h-2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEaseInControlPoint))
export { Memo as IconEaseInControlPoint }
