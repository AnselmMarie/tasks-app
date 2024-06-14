/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlask_2Filled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="M15 2a1 1 0 0 1 0 2v5.674l.062.03a7 7 0 0 1 3.85 5.174l.037.262a7 7 0 0 1-3.078 6.693 1 1 0 0 1-.553.167H8.683a1 1 0 0 1-.552-.166A7 7 0 0 1 8.938 9.7L9 9.672V4a1 1 0 1 1 0-2zm-2 2h-2v6.34a1 1 0 0 1-.551.894l-.116.049A5 5 0 0 0 7.413 14h9.172a5 5 0 0 0-2.918-2.715 1 1 0 0 1-.667-.943z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFlask_2Filled))
export { Memo as IconFlask_2Filled }
