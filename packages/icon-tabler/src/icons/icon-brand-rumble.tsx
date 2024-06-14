/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandRumble = (_props: any) => {
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
        <Path d="M19.993 9.108c.383.4.687.863.893 1.368a4.195 4.195 0 0 1 .006 3.166 4.37 4.37 0 0 1-.887 1.372 20.233 20.233 0 0 1-2.208 2 20.615 20.615 0 0 1-2.495 1.669 21.322 21.322 0 0 1-5.622 2.202 4.213 4.213 0 0 1-3.002-.404 3.98 3.98 0 0 1-1.163-.967 3.796 3.796 0 0 1-.695-1.312C3.621 14.3 3.798 9.89 4.954 5.972c.609-2.057 2.643-3.349 4.737-2.874 3.88.88 7.52 3.147 10.302 6.01" />
        <Path d="M14.044 13.034c.67-.505.67-1.489 0-2.01a14.824 14.824 0 0 0-1.498-1.044 15.783 15.783 0 0 0-1.62-.865c-.77-.35-1.63.139-1.753.973a15.385 15.385 0 0 0-.1 3.786 1.232 1.232 0 0 0 1.715 1.027 14.783 14.783 0 0 0 1.694-.827 14.46 14.46 0 0 0 1.562-1.035z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandRumble))
export { Memo as IconBrandRumble }
