/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandYoutubeKids = (_props: any) => {
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
        <Path d="m18.608 17.75-3.9.268h-.027a13.83 13.83 0 0 0-3.722.828l-2.511.908a4.111 4.111 0 0 1-3.287-.216 3.82 3.82 0 0 1-1.98-2.527l-1.376-6.05a3.669 3.669 0 0 1 .536-2.86A3.964 3.964 0 0 1 4.83 6.44l11.25-2.354c2.137-.448 4.247.85 4.713 2.9l1.403 6.162a3.677 3.677 0 0 1-.697 3.086 4.007 4.007 0 0 1-2.89 1.512v.002z" />
        <Path d="m9 10 1.208 5 4.292-4z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandYoutubeKids))
export { Memo as IconBrandYoutubeKids }
