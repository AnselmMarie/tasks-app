/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlaskFilled = (_props: any) => {
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
          d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814.034.077a1.7 1.7 0 0 1-.002 1.193l-.07.162a1.7 1.7 0 0 1-1.213.911L17.5 22h-11l-.181-.017a1.7 1.7 0 0 1-1.285-2.266l.039-.09L9 8.823V4a1 1 0 1 1 0-2zm-2 2h-2v4h2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFlaskFilled))
export { Memo as IconFlaskFilled }
