/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStormOff = (_props: any) => {
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
        <Path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3.012 3.012 0 0 0-1.41-1.39" />
        <Path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585-2.426A7 7 0 0 0 9.471 5.47" />
        <Path d="M5.369 14.236c-1.605-3.428-1.597-6.673-1-9.849M18.63 9.76a14.323 14.323 0 0 1 1.368 6.251m-.37 3.608c-.087.46-.187.92-.295 1.377M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStormOff))
export { Memo as IconStormOff }
