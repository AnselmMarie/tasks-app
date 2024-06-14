/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWorldCheck = (_props: any) => {
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
        <Path d="M20.946 12.99a9 9 0 1 0-9.46 7.995M3.6 9h16.8M3.6 15h13.9" />
        <Path d="M11.5 3a17 17 0 0 0 0 18m1-18a16.997 16.997 0 0 1 2.311 12.001M15 19l2 2 4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWorldCheck))
export { Memo as IconWorldCheck }
