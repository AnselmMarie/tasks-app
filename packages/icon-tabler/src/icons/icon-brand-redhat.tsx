/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandRedhat = (_props: any) => {
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
        <Path d="m6 10.5 1.436-4c.318-.876.728-1.302 1.359-1.302.219 0 1.054.365 1.88.583.825.219.733-.329.908-.487.176-.158.355-.294.61-.294.242 0 .553.048 1.692.448a20.42 20.42 0 0 1 2.204.922c1.175.582 1.426.913 1.595 1.507L18.5 12.5c2.086.898 3.5 2.357 3.5 3.682C22 17.867 20.8 20 16.043 20 9.837 20 2 15.958 2 12.68c0-1.044 1.333-1.77 4-2.18" />
        <Path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5 1.314 0 3 .063 3-1.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandRedhat))
export { Memo as IconBrandRedhat }
