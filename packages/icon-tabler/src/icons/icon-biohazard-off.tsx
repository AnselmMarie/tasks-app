/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBiohazardOff = (_props: any) => {
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
        <Path d="M10.586 10.586a2 2 0 1 0 2.836 2.82" />
        <Path d="M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 0 1-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 0 1 7.737-3.693" />
        <Path d="M16.745 19.495a4.75 4.75 0 0 1-4.69-5.503h-.06m2.538-3.454a4.75 4.75 0 0 1 6.957 3.987v.217m-11.195-3.813a4.75 4.75 0 0 1-2.988-3.64m.66-3.324a4.75 4.75 0 0 1 .5-.66l.164-.172m6.718 0a4.75 4.75 0 0 1-.836 7.385M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBiohazardOff))
export { Memo as IconBiohazardOff }
