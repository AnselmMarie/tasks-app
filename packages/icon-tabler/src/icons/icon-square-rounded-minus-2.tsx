/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareRoundedMinus_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.5 21c-.18.002-.314 0-.5 0-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9c0 1.136-.046 2.138-.152 3.02M16 19h6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareRoundedMinus_2))
export { Memo as IconSquareRoundedMinus_2 }
