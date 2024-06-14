/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGoogleBigQuery = (_props: any) => {
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
        <Path d="M17.73 19.875A2.225 2.225 0 0 1 15.782 21H8.499a2.222 2.222 0 0 1-1.947-1.158l-4.272-6.75a2.269 2.269 0 0 1 0-2.184l4.272-6.75A2.225 2.225 0 0 1 8.498 3h7.285c.809 0 1.554.443 1.947 1.158l3.98 6.75a2.33 2.33 0 0 1 0 2.25l-3.98 6.75z" />
        <Path d="M8 11.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m6 2.5 2 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGoogleBigQuery))
export { Memo as IconBrandGoogleBigQuery }
