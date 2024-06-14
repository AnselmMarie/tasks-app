/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCylinderPlus = (_props: any) => {
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
        <Path d="M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6" />
        <Path d="M5 6v12c0 1.657 3.134 3 7 3 .173 0 .345-.003.515-.008M19 12V6m-3 13h6m-3-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCylinderPlus))
export { Memo as IconCylinderPlus }
