/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandSanitizer = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3zm8-18H9a2 2 0 0 0-2 2m5-2v5m0 3v4m-2-2h4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHandSanitizer))
export { Memo as IconHandSanitizer }
