/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBarrierBlockOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7h8a1 1 0 0 1 1 1v7c0 .27-.107.516-.282.696M16 16H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2m0 9v4m.5-4 4.244-4.244m2.001-2.001L16.5 7m-3 9 1.249-1.249m1.992-1.992L20 9.5m-16 4 4.752-4.752M17 17v3M5 20h4m6 0h4M17 7V5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBarrierBlockOff))
export { Memo as IconBarrierBlockOff }
