/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandNem = (_props: any) => {
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
        <Path d="M12.182 2c1.94.022 3.879.382 5.818 1.08l.364.135A23.075 23.075 0 0 1 22 5c0 5.618-1.957 10.258-5.87 13.92-1.24 1.239-2.5 2.204-3.78 2.898L12 22c-1.4-.703-2.777-1.729-4.13-3.079C3.958 15.258 2 10.618 2 5c2.545-1.527 5.09-2.471 7.636-2.832L10 2.12A16.786 16.786 0 0 1 11.818 2z" />
        <Path d="M2.1 7.07C4.173 13.79 7.473 14.767 12 10c0-4 1.357-6.353 4.07-7.06l.59-.11m-.31 15.68S19 13 12 10" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandNem))
export { Memo as IconBrandNem }
