/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconToolsKitchen_3 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0 3 4 0 1 0-6 0m3 4v9"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconToolsKitchen_3))
export { Memo as IconToolsKitchen_3 }
