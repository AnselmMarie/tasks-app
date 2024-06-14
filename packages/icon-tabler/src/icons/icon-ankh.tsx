/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAnkh = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 13h12m-6 8v-8l-.422-.211A6.472 6.472 0 0 1 8 7a4 4 0 1 1 8 0 6.472 6.472 0 0 1-3.578 5.789L12 13"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAnkh))
export { Memo as IconAnkh }
