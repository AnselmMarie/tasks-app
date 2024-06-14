/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBorderStyle_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 18v.01M8 18v.01m4-.01v.01m4-.01v.01m4-.01v.01M18 12h2m-9 0h2m-9 0h2M4 6h16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBorderStyle_2))
export { Memo as IconBorderStyle_2 }
