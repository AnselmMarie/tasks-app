/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlaneOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.788 5.758 9 3h3l4 7h4a2 2 0 1 1 0 4h-2m-2.718 1.256L12 21H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlaneOff))
export { Memo as IconPlaneOff }
