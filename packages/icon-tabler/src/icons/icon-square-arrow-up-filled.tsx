/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareArrowUpFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5-.09.004-.058.007-.118.025-.105.035-.113.054-.111.071a1.008 1.008 0 0 0-.112.097l-4 4-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L11 10.415V16l.007.117A1 1 0 0 0 13 16v-5.585l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497l-4-4-.082-.073-.104-.074-.098-.052-.11-.044-.112-.03-.126-.017z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareArrowUpFilled))
export { Memo as IconSquareArrowUpFilled }
