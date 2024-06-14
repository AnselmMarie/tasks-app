/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClockBolt = (_props: any) => {
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
        <Path d="M20.984 12.53a9 9 0 1 0-7.552 8.355" />
        <Path d="M12 7v5l3 3m4 1-2 3h4l-2 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconClockBolt))
export { Memo as IconClockBolt }
