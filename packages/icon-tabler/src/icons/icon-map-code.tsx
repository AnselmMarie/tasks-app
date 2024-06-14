/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapCode = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11 18-2-1-6 3V7l6-3 6 3 6-3v9M9 4v13m6-10v6.5m5 7.5 2-2-2-2m-3 0-2 2 2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapCode))
export { Memo as IconMapCode }
