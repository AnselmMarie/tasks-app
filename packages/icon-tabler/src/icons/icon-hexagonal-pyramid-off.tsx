/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHexagonalPyramidOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7.877 7.88-4.56 7.53a1.988 1.988 0 0 0 .266 2.484l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l1.264-1.263m1.792-2.205a1.986 1.986 0 0 0-.262-1.538L12.838 2.457a.996.996 0 0 0-1.676 0L9.39 5.383M12 2l-1.254 4.742m-.841 3.177L7 20.9M12 2l2.153 8.14m1.444 5.457L17 20.9M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHexagonalPyramidOff))
export { Memo as IconHexagonalPyramidOff }
