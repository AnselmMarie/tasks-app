/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTed = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 8h4M4 8v8m9-8H9v8h4m-4-4h2.5M16 8v8h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTed))
export { Memo as IconBrandTed }
