/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunglasses = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 4H6L3 14M16 4h2l3 10m-11 2h4m7 .5a3.5 3.5 0 0 1-7 0V14h7zm-11 0a3.5 3.5 0 0 1-7 0V14h7zM4 14l4.5 4.5M15 14l4.5 4.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunglasses))
export { Memo as IconSunglasses }
