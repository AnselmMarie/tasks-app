/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRectangularPrismPlus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12.5V8.991a1.98 1.98 0 0 0-1-1.717l-4-2.008a2.016 2.016 0 0 0-2 0L4 10.273c-.619.355-1 1.01-1 1.718v5.018c0 .709.381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l2.062-1.032M9 21v-7.5m0 0L20.5 8m-17 3L9 13.5m7 5.5h6m-3-3v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRectangularPrismPlus))
export { Memo as IconRectangularPrismPlus }
