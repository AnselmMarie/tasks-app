/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkateboarding = (_props: any) => {
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
        <Path d="M16 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 15H9l.75-1.5M14 19v-5l-2.5-3L14 7" />
        <Path d="m8 8 3-1h4l1 3h3" />
        <Path fill="currentColor" d="M17.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
        <Path d="M3 18c0 .552.895 1 2 1h14c1.105 0 2-.448 2-1" />
        <Path fill="currentColor" d="M6.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSkateboarding))
export { Memo as IconSkateboarding }
