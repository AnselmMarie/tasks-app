/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRegexOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M17 7.875l3-1.687m-3 1.687v3.375m0-3.375-3-1.687m3 1.687 3 1.688M17 4.5v3.375m0 0-3 1.688M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRegexOff))
export { Memo as IconRegexOff }
