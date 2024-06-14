/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChristmasBall = (_props: any) => {
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
        <Path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
        <Path d="m11 5 1-2 1 2m-8.488 5.161C7.008 9.056 9.504 9.336 12 11c2.627 1.752 5.255 1.97 7.882.653M4.315 15.252c2.561-1.21 5.123-.96 7.685.748 2.293 1.528 4.585 1.889 6.878 1.081" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChristmasBall))
export { Memo as IconChristmasBall }
