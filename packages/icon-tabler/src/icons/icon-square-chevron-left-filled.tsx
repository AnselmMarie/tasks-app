/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareChevronLeftFilled = (_props: any) => {
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
          d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5.293 6.293a1 1 0 0 0-1.414 0l-3 3-.083.094a1 1 0 0 0 .083 1.32l3 3 .094.083a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32L11.415 12l2.292-2.293.083-.094a1 1 0 0 0-.083-1.32"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareChevronLeftFilled))
export { Memo as IconSquareChevronLeftFilled }
