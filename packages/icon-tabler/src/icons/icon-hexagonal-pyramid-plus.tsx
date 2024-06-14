/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHexagonalPyramidPlus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18.642 12.04-5.804-9.583a.996.996 0 0 0-1.676 0L3.316 15.411a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583H12.5M12 2 7 20.9M12 2l3.304 12.489M16 19h6m-3-3v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHexagonalPyramidPlus))
export { Memo as IconHexagonalPyramidPlus }
