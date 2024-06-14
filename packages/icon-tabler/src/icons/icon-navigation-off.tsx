/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNavigationOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.28 12.28C15.33 10.216 13.903 7.123 12 3c-.7 1.515-1.223 2.652-1.573 3.41m-1.27 2.75c-.882 1.913-2.59 5.618-5.127 11.115-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l7.265 2.463c.196.077.42.032.57-.116a.548.548 0 0 0 .134-.572l-.26-.563M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNavigationOff))
export { Memo as IconNavigationOff }
