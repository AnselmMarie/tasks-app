/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlaceholder = (_props: any) => {
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
        <Path d="M10 20.415A8 8 0 1 0 13 5h-3" />
        <Path d="m13 8-3-3 3-3M7 17l4-4-4-4-4 4z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPlaceholder))
export { Memo as IconPlaceholder }
