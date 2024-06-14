/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUpRightCircle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.464 15.536 18 6m0 4V6h-4m-5.586 9.586a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.828"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUpRightCircle))
export { Memo as IconArrowUpRightCircle }
