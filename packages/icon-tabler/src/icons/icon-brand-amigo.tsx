/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandAmigo = (_props: any) => {
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
        <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="m9.591 3.635-7.13 14.082c-1.712 3.38 1.759 5.45 3.69 3.573l1.86-1.81c3.142-3.054 4.959-2.99 8.039.11l1.329 1.337c2.372 2.387 5.865.078 4.176-3.225L14.36 3.635c-1.114-2.18-3.666-2.18-4.77 0z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandAmigo))
export { Memo as IconBrandAmigo }
