/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChess = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3a3 3 0 0 1 3 3c0 1.113-.6 2.482-1.5 3l1.5 7H9l1.5-7C9.6 8.482 9 7.113 9 6a3 3 0 0 1 3-3M8 9h8m-9.316 7.772a1 1 0 0 0-.684.949V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.28a1 1 0 0 0-.684-.948L15 16H9z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChess))
export { Memo as IconChess }
