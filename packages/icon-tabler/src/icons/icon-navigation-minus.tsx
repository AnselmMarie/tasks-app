/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNavigationMinus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 15c-1.232-2.67-3.065-6.67-5.5-12L4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5m4 .5h6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNavigationMinus))
export { Memo as IconNavigationMinus }
