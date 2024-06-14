/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDisney = (_props: any) => {
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
        <Path d="M3.22 5.838C1.913 5.688 2 5.26 2 5.044 2 4.828 2.424 4 6.34 4 11.034 4 21 7.645 21 14.042s-8.71 4.931-10.435 4.52C8.841 18.15 5 16.306 5 14.388 5 12.993 8.08 12 11.715 12 15.349 12 17 13.041 17 14c0 .5-.074 1.229-1 1.5" />
        <Path d="M10.02 8a505.153 505.153 0 0 0 0 13" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDisney))
export { Memo as IconBrandDisney }
