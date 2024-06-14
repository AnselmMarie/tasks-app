/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLetterCaseUpper = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 19V8.5a3.5 3.5 0 0 1 7 0V19m-7-6h7m4 6V8.5a3.5 3.5 0 0 1 7 0V19m-7-6h7"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLetterCaseUpper))
export { Memo as IconLetterCaseUpper }
