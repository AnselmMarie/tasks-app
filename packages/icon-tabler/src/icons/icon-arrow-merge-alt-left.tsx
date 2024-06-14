/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowMergeAltLeft = (_props: any) => {
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
        <Path d="m8 7 4-4 4 4m2 14v.01m0-3v.01m-1-3v.01m-3-2v.01" />
        <Path d="M12 3v5.394A6.737 6.737 0 0 1 9 14a6.737 6.737 0 0 0-3 5.606V21" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowMergeAltLeft))
export { Memo as IconArrowMergeAltLeft }
