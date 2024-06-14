/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUpLeftCircle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.536 15.536 6 6m4 0H6v4m9.586 5.586a2 2 0 1 0 2.828 2.828 2 2 0 0 0-2.828-2.828"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUpLeftCircle))
export { Memo as IconArrowUpLeftCircle }
