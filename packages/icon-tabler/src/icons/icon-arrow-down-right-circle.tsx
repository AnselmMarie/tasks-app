/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowDownRightCircle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.464 8.464 18 18m-4 0h4v-4M8.414 8.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowDownRightCircle))
export { Memo as IconArrowDownRightCircle }
