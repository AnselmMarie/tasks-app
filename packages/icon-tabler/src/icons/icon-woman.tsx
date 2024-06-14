/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWoman = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 16v5m4-5v5m-6-5h8l-2-7h-4zm-3-5c1.667-1.333 3.333-2 5-2m9 2c-1.667-1.333-3.333-2-5-2m-4-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWoman))
export { Memo as IconWoman }
