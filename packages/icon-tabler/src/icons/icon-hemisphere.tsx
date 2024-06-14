/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHemisphere = (_props: any) => {
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
        <Path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9" />
        <Path d="M3 9a9 9 0 0 0 18 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHemisphere))
export { Memo as IconHemisphere }
