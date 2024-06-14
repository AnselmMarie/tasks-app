/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhoneFilled = (_props: any) => {
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
          d="M9 3a1 1 0 0 1 .877.519l.051.11 2 5a1 1 0 0 1-.313 1.16l-.1.068-1.674 1.004.063.103a10 10 0 0 0 3.132 3.132l.102.062 1.005-1.672a1 1 0 0 1 1.113-.453l.115.039 5 2a1 1 0 0 1 .622.807L21 15v4c0 1.657-1.343 3-3.06 2.998C9.361 21.477 2.522 14.638 2 6a3 3 0 0 1 2.824-2.995L5 3z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPhoneFilled))
export { Memo as IconPhoneFilled }
