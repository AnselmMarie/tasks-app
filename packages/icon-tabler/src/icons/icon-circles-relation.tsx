/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesRelation = (_props: any) => {
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
        <Path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
        <Path d="M14.813 17.883a6 6 0 1 0-4.496-3.954" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesRelation))
export { Memo as IconCirclesRelation }
