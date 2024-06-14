/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInnerShadowBottomRightFilled = (_props: any) => {
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m6 9a1 1 0 0 0-1 1 5 5 0 0 1-5 5 1 1 0 0 0 0 2 7 7 0 0 0 7-7 1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconInnerShadowBottomRightFilled))
export { Memo as IconInnerShadowBottomRightFilled }
