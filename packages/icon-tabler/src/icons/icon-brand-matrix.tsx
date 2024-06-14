/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandMatrix = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 3H3v18h1m16 0h1V3h-1M7 9v6m5 0v-3.5a2.5 2.5 0 1 0-5 0v.5m10 3v-3.5a2.5 2.5 0 1 0-5 0v.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandMatrix))
export { Memo as IconBrandMatrix }
