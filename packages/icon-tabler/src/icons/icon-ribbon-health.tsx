/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRibbonHealth = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21s9.286-9.841 9.286-13.841a3.864 3.864 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007 4.13 4.13 0 0 0 8.896 4.15a3.864 3.864 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRibbonHealth))
export { Memo as IconRibbonHealth }
