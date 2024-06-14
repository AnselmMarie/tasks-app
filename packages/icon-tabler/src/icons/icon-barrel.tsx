/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBarrel = (_props: any) => {
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
        <Path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22C19.521 7.48 20 9.74 20 12c0 2.26-.479 4.52-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22C4.479 16.52 4 14.26 4 12c0-2.26.479-4.52 1.437-6.78A2 2 0 0 1 7.278 4" />
        <Path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333-1 8M10 4c-.667 2.667-1 5.333-1 8s.333 5.333 1 8m-5.5-4h15m0-8h-15" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBarrel))
export { Memo as IconBarrel }
