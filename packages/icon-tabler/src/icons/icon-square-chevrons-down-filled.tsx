/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareChevronsDownFilled = (_props: any) => {
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
          d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM9.613 12.21a1 1 0 0 0-1.32 1.497l3 3 .094.083a1 1 0 0 0 1.32-.083l3-3 .083-.094a1 1 0 0 0-.083-1.32l-.094-.083a1 1 0 0 0-1.32.083L12 14.585l-2.293-2.292zm0-5a1 1 0 0 0-1.32 1.497l3 3 .094.083a1 1 0 0 0 1.32-.083l3-3 .083-.094a1 1 0 0 0-.083-1.32l-.094-.083a1 1 0 0 0-1.32.083L12 9.585 9.707 7.293z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareChevronsDownFilled))
export { Memo as IconSquareChevronsDownFilled }
