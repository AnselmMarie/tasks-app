/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLockAccessOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V6c0-.554.225-1.055.588-1.417M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.55 0 1.05-.222 1.41-.582M15 11a1 1 0 0 1 1 1m-.29 3.704A1 1 0 0 1 15 16H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2m-1 0v-1m1.182-2.826A2 2 0 0 1 14 9v1M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLockAccessOff))
export { Memo as IconLockAccessOff }
