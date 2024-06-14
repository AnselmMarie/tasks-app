/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowRotaryLastLeft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0v6M12.5 9.5 6 3m5 0H6v5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowRotaryLastLeft))
export { Memo as IconArrowRotaryLastLeft }
