/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowMergeBoth = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16 8-4-4-4 4m4 12V4m6 14c-4-1.333-6-4.667-6-10M6 18c4-1.333 6-4.667 6-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowMergeBoth))
export { Memo as IconArrowMergeBoth }
