/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBounceLeft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 15.5c-3-1-5.5-.5-8 4.5-.5-3-1.5-5.5-3-8M6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBounceLeft))
export { Memo as IconBounceLeft }
