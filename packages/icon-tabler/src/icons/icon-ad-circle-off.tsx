/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAdCircleOff = (_props: any) => {
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
        <Path d="M4.91 4.949A9.968 9.968 0 0 0 2 12c0 5.523 4.477 10 10 10a9.968 9.968 0 0 0 7.05-2.909m1.728-2.298A9.955 9.955 0 0 0 22 12c0-5.523-4.477-10-10-10-1.74 0-3.376.444-4.8 1.225" />
        <Path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138-1.358m.716.711c.094.196.146.415.146.647V15m-3-2h3m4 1v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAdCircleOff))
export { Memo as IconAdCircleOff }
