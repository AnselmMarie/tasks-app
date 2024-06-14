/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTimeDurationOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12v.01m4.5 7.79v.01M4.2 16.5v.01m0-9.01v.01M12 21a8.994 8.994 0 0 0 6.362-2.634m1.685-2.336A9 9 0 0 0 12 3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTimeDurationOff))
export { Memo as IconTimeDurationOff }
