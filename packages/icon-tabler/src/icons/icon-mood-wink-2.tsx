/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoodWink_2 = (_props: any) => {
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
        <Path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M9 10h-.01" />
        <Path d="M14.5 15a3.5 3.5 0 0 1-5 0m6-6.5L14 10l1.5 1.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMoodWink_2))
export { Memo as IconMoodWink_2 }
