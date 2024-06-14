/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScreenshot = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 19a2 2 0 0 1-2-2m0-4v-2m0-4a2 2 0 0 1 2-2m4 0h2m4 0a2 2 0 0 1 2 2m0 4v2m0 4v4m2-2h-4m-4 0h-2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScreenshot))
export { Memo as IconScreenshot }
