/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHexagonalPyramid = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.162 2.457 3.316 15.411a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l2.527-2.523a1.988 1.988 0 0 0 .267-2.483L12.838 2.457a.996.996 0 0 0-1.676 0M12 2 7 20.9M12 2l5 18.9"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHexagonalPyramid))
export { Memo as IconHexagonalPyramid }
