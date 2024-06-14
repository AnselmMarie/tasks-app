/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrolley = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-3-3 3 2m3-1 8-12m-3 5 2 1M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8L10.2 13.41a1.3 1.3 0 0 1-1.792.394L5.102 11.7a1.3 1.3 0 0 1-.396-1.8L7.8 5.09a1.3 1.3 0 0 1 1.792-.394z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrolley))
export { Memo as IconTrolley }
