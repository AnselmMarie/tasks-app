/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZeppelin = (_props: any) => {
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
        <Path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6c-2.13 0-4.584-.926-7.364-2.777L4 15v-3.33A46.07 46.07 0 0 1 2 10a46.07 46.07 0 0 1 2-1.67V5l2.135 1.778C8.915 4.926 11.37 4 13.5 4" />
        <Path d="M10 15.5V20h6v-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZeppelin))
export { Memo as IconZeppelin }
