/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandZwift = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 4C4.035 4 3 5.101 3 6.5S4.035 9 5.5 9H8l-4.637 7.19a2.434 2.434 0 0 0-.011 2.538c.473.787 1.35 1.272 2.3 1.272H16.5c1.465 0 2.5-1.101 2.5-2.5S17.965 15 16.5 15H14l7-11z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandZwift))
export { Memo as IconBrandZwift }
