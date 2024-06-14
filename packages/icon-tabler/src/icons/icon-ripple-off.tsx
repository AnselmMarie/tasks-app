/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRippleOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7c.915-.61 1.83-1.034 2.746-1.272m4.212.22c.68.247 1.361.598 2.042 1.052 3 2 6 2 9 0M3 17c3-2 6-2 9 0 2.092 1.395 4.184 1.817 6.276 1.266M3 12c3-2 6-2 9 0m5.482 1.429c1.173-.171 2.345-.647 3.518-1.429M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRippleOff))
export { Memo as IconRippleOff }
