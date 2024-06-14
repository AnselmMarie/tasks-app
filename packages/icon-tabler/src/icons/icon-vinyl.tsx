/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVinyl = (_props: any) => {
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
        <Path d="M16 3.937A9 9 0 1 0 21 12" />
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="m20 4-3.5 10-2.5 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVinyl))
export { Memo as IconVinyl }
