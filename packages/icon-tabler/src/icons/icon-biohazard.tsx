/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBiohazard = (_props: any) => {
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
        <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 0 1-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 0 1 7.737-3.693m6.513 8.443a4.75 4.75 0 0 1-4.69-5.503h-.06m1.764-2.944a4.75 4.75 0 0 1 7.731 3.477v.217m-11.195-3.813a4.75 4.75 0 0 1-1.828-7.624l.164-.172m6.718 0a4.75 4.75 0 0 1-1.665 7.798" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBiohazard))
export { Memo as IconBiohazard }
