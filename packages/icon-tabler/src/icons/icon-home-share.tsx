/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHomeShare = (_props: any) => {
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
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127" />
        <Path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5m4 1 5-5m0 4.5V17h-4.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHomeShare))
export { Memo as IconHomeShare }
