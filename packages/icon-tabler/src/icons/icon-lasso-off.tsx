/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLassoOff = (_props: any) => {
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
        <Path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.066 11.066 0 0 1 12 3c4.97 0 9 3.134 9 7 0 1.799-.873 3.44-2.307 4.68m-2.503 1.517A11.066 11.066 0 0 1 12 17c-1.913 0-3.686-.464-5.144-1.255" />
        <Path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M5 17c0 1.42.316 2.805 1 4M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLassoOff))
export { Memo as IconLassoOff }
