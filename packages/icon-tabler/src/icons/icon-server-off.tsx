/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconServerOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12H6a3 3 0 0 1-3-3V7c0-1.083.574-2.033 1.435-2.56M8 4h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2m0 0h2a3 3 0 0 1 3 3v2m-1.448 2.568A2.986 2.986 0 0 1 18 20H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h6M7 8v.01M7 16v.01M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconServerOff))
export { Memo as IconServerOff }
