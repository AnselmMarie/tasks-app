/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMagnetic = (_props: any) => {
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
        <Path d="M12 3v18m6-14c-.633-1.255-1.538-2-2.5-2-1.933 0-3.5 3.134-3.5 7s1.567 7 3.5 7 3.5-3.134 3.5-7v-1M6 7c.633-1.255 1.538-2 2.5-2 1.933 0 3.5 3.134 3.5 7s-1.567 7-3.5 7S5 15.866 5 12v-1" />
        <Path d="m3 13 2-2 2 2m10 0 2-2 2 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMagnetic))
export { Memo as IconMagnetic }
