/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderHermaphrodite = (_props: any) => {
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
        <Path d="M12 14v7m-3-3h6M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
        <Path d="M15 3a3 3 0 1 1-6 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGenderHermaphrodite))
export { Memo as IconGenderHermaphrodite }
