/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOm = (_props: any) => {
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
        <Path d="M7 12c2.21 0 4-1.567 4-3.5S9.21 5 7 5c-1.594 0-2.97.816-3.613 2m.036 7.483A4.944 4.944 0 0 0 3 16.5C3 18.985 4.79 21 7 21s4-2.015 4-4.5S9.21 12 7 12" />
        <Path d="M14.071 17.01C14.398 19.287 15.81 21 17.5 21c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5c-.96 0-1.868.606-2.5 1.5-.717 1.049-1.76 1.7-2.936 1.7-.92 0-1.766-.406-2.434-1.087M17 3l2 2m-7-2c1.667 3.667 4.667 5.333 9 5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconOm))
export { Memo as IconOm }
