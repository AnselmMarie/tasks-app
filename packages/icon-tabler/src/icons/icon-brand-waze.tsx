/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandWaze = (_props: any) => {
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
        <Path d="M6.66 17.52A7 7 0 0 1 3 13c2 0 3-1 3-2.51C6 6.57 8.25 3 13.38 3 18 3 21 6.51 21 11a8.08 8.08 0 0 1-3.39 6.62M10 18.69a17.29 17.29 0 0 0 3.33.3h.54" />
        <Path d="M14 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 9h.01M11 9h.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandWaze))
export { Memo as IconBrandWaze }
