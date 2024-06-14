/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHomeRibbon = (_props: any) => {
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
        <Path d="M16 15h5v7l-2.5-1.5L16 22z" />
        <Path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h1.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHomeRibbon))
export { Memo as IconHomeRibbon }
