/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquare_4Filled = (_props: any) => {
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
          d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM14 7a1 1 0 0 0-.993.883L13 8v3h-2V8l-.007-.117a1 1 0 0 0-1.986 0L9 8v3l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v3l.007.117a1 1 0 0 0 1.986 0L15 16V8l-.007-.117A1 1 0 0 0 14 7"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquare_4Filled))
export { Memo as IconSquare_4Filled }
