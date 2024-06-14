/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWorldDown = (_props: any) => {
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
        <Path d="M20.986 12.509a9 9 0 1 0-8.455 8.476M3.6 9h16.8M3.6 15h10.9" />
        <Path d="M11.5 3a17 17 0 0 0 0 18m1-18c2.313 3.706 3.07 7.857 2.27 12M19 16v6m3-3-3 3-3-3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWorldDown))
export { Memo as IconWorldDown }
