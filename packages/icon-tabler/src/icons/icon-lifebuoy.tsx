/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLifebuoy = (_props: any) => {
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
        <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m12 3 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLifebuoy))
export { Memo as IconLifebuoy }
