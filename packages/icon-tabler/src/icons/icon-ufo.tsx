/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUfo = (_props: any) => {
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
        <Path d="M16.95 9.01c3.02.739 5.05 2.123 5.05 3.714C22 15.091 17.52 17 12 17S2 15.091 2 12.724C2 11.134 4.04 9.739 7.07 9" />
        <Path d="M7 9c0 1.105 2.239 2 5 2s5-.895 5-2v-.035C17 6.223 14.761 4 12 4S7 6.223 7 8.965zm8 8 2 3m-8.5-3L7 20m5-6h.01M7 13h.01M17 13h.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconUfo))
export { Memo as IconUfo }
