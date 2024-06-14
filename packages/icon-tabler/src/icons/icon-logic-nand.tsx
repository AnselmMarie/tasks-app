/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLogicNand = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 12h-3M2 9h3m-3 6h3M7 5c6 0 8 3.5 8 7s-2 7-8 7H5V5zm8 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLogicNand))
export { Memo as IconLogicNand }
