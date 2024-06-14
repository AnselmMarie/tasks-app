/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandOkRu = (_props: any) => {
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
        <Path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8" />
        <Path d="M9.5 13c1.333.667 3.667.667 5 0m-5 4 2.5-3 2.5 3M12 13.5v.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandOkRu))
export { Memo as IconBrandOkRu }
