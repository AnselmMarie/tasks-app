/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkMinus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 15 6-6m-4-3 .463-.536a5 5 0 1 1 7.071 7.072L18 13m-5.397 5.534a5.07 5.07 0 0 1-7.127 0 4.972 4.972 0 0 1 0-7.071L6 11m10 8h6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinkMinus))
export { Memo as IconLinkMinus }
