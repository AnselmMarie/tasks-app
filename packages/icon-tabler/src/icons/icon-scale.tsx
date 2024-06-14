/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScale = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 20h10M6 6l6-1 6 1m-6-3v17m-3-8L6 6l-3 6a3 3 0 0 0 6 0m12 0-3-6-3 6a3 3 0 0 0 6 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScale))
export { Memo as IconScale }
