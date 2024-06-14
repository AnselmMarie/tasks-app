/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLollipopOff = (_props: any) => {
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
        <Path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416-1.57a7 7 0 1 0-9.884-9.915" />
        <Path d="M21 10a3.5 3.5 0 0 0-7 0m-1.29 2.715A3.5 3.5 0 0 1 7 10m7 7c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10m0-7a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLollipopOff))
export { Memo as IconLollipopOff }
