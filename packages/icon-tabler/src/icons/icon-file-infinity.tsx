/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileInfinity = (_props: any) => {
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
        <Path d="M15.536 17.586a2.123 2.123 0 0 0-2.929 0 1.951 1.951 0 0 0 0 2.828c.809.781 2.12.781 2.929 0 .809-.781-.805.778 0 0l1.46-1.41 1.46-1.419" />
        <Path d="m15.54 17.582 1.46 1.42 1.46 1.41c.809.78-.805-.779 0 0s2.12.781 2.929 0a1.951 1.951 0 0 0 0-2.828 2.123 2.123 0 0 0-2.929 0M14 3v4a1 1 0 0 0 1 1h4" />
        <Path d="M9.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFileInfinity))
export { Memo as IconFileInfinity }
