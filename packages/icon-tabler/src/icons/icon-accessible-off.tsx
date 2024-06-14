/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAccessibleOff = (_props: any) => {
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
        <Path d="m10 16.5 2-3 2 3m-2-3V12m2.627-1.376L15 10.5m-6 0 2.231.744" />
        <Path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73" />
        <Path d="M12 8a.5.5 0 1 0-.5-.5M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAccessibleOff))
export { Memo as IconAccessibleOff }
