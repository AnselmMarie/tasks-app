/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignBoxBottomCenterFilled = (_props: any) => {
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
          d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM9 15a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 10 18v-2l-.007-.117A1 1 0 0 0 9 15m3-4a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 13 18v-6l-.007-.117A1 1 0 0 0 12 11m3 2a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 16 18v-4l-.007-.117A1 1 0 0 0 15 13"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlignBoxBottomCenterFilled))
export { Memo as IconAlignBoxBottomCenterFilled }
