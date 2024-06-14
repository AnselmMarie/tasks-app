/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareF9Filled = (_props: any) => {
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
          d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15.25 8h-1.5l-.144.006A1.75 1.75 0 0 0 12 9.75v1.5l.006.144A1.75 1.75 0 0 0 13.75 13H15v1h-1.033l-.025-.087A1 1 0 0 0 12 14.25c0 .966.784 1.75 1.75 1.75h1.5l.144-.006A1.75 1.75 0 0 0 17 14.25v-4.5l-.006-.144A1.75 1.75 0 0 0 15.25 8M10 8H8l-.117.007A1 1 0 0 0 7 9v6l.007.117A1 1 0 0 0 8 16l.117-.007A1 1 0 0 0 9 15v-2h1l.117-.007A1 1 0 0 0 10 11H9v-1h1l.117-.007A1 1 0 0 0 10 8m5 2v1h-1v-1z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareF9Filled))
export { Memo as IconSquareF9Filled }