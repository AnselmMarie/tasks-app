/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLeftRight = (_props: any) => {
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
        <Path d="m17 13 4-4-4-4M7 13 3 9l4-4" />
        <Path d="M12 14a5 5 0 0 1 5-5h4m-9 10v-5a5 5 0 0 0-5-5H3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLeftRight))
export { Memo as IconArrowLeftRight }
