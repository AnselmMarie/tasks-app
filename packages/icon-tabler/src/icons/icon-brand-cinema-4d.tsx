/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandCinema_4d = (_props: any) => {
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
        <Path d="M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M17.7 12.137A5.738 5.738 0 1 1 11.963 6.4" />
        <Path d="M17.7 12.338v-1.175c0-.47.171-.92.476-1.253a1.56 1.56 0 0 1 1.149-.52c.827 0 1.523.676 1.62 1.573.037.344.055.69.055 1.037m-9.338-5.6h1.175c.47 0 .92-.176 1.253-.49.333-.314.52-.74.52-1.184 0-.852-.676-1.57-1.573-1.67A9.496 9.496 0 0 0 12 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandCinema_4d))
export { Memo as IconBrandCinema_4d }
