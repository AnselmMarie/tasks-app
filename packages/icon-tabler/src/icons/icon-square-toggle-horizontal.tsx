/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareToggleHorizontal = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 12H2m2 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8m-2 6a2 2 0 0 0 2-2M4 18a2 2 0 0 0 2 2m8 0h-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareToggleHorizontal))
export { Memo as IconSquareToggleHorizontal }
