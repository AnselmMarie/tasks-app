/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLockStar = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h9m-8 0V7a4 4 0 1 1 8 0v4m1.8 9.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLockStar))
export { Memo as IconLockStar }
