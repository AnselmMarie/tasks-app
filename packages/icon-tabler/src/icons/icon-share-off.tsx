/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShareOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m.861 9.896a3 3 0 0 0 4.265 4.22m.578-3.417a3.012 3.012 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66 15.3 7.3m-6.6 6 6.6 3.4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShareOff))
export { Memo as IconShareOff }
