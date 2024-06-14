/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClockCode = (_props: any) => {
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
        <Path d="M20.931 13.111a9 9 0 1 0-9.453 7.874M20 21l2-2-2-2m-3 0-2 2 2 2" />
        <Path d="M12 7v5l2 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconClockCode))
export { Memo as IconClockCode }
