/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDaysCounter = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M20.779 10.007a9 9 0 1 0-10.77 10.772M13 21h8v-7" />
        <Path d="M12 8v4l3 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDaysCounter))
export { Memo as IconBrandDaysCounter }
