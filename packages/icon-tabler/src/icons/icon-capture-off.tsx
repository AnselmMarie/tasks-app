/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaptureOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.554 0 1.055-.225 1.417-.589M9.87 9.887a3 3 0 0 0 4.255 4.23m.58-3.416a3.012 3.012 0 0 0-1.4-1.403M4 8V6c0-.548.22-1.044.577-1.405M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaptureOff))
export { Memo as IconCaptureOff }