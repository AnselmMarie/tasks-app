/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLanguageOff = (_props: any) => {
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
        <Path d="M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13" />
        <Path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7 2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLanguageOff))
export { Memo as IconLanguageOff }
