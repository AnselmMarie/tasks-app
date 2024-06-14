/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCat = (_props: any) => {
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
        <Path d="M20 3v10a8 8 0 1 1-16 0V3l3.432 3.432A7.963 7.963 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z" />
        <Path d="M2 16h5l-4 4m19-4h-5l4 4m-10-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-2-5v.01m6-.01v.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCat))
export { Memo as IconCat }
