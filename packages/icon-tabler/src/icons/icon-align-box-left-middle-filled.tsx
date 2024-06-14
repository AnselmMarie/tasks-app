/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignBoxLeftMiddleFilled = (_props: any) => {
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
          d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM8 14H6l-.117.007A1 1 0 0 0 6 16h2l.117-.007A1 1 0 0 0 8 14m4-3H6l-.117.007A1 1 0 0 0 6 13h6l.117-.007A1 1 0 0 0 12 11m-2-3H6l-.117.007A1 1 0 0 0 6 10h4l.117-.007A1 1 0 0 0 10 8"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlignBoxLeftMiddleFilled))
export { Memo as IconAlignBoxLeftMiddleFilled }
