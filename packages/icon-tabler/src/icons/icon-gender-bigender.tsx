/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderBigender = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0m12-8-5 5m1-5h4v4m-8 9v6m-3-3h6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderBigender))
export { Memo as IconGenderBigender }
