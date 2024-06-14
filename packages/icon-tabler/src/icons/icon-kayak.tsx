/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKayak = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172 2.172 5l1.414 1.414a2 2 0 0 0 2.828 0m11.172 11.172a2 2 0 0 0 0 2.828L19 21.828 21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5m-15.5 10 5 5m1-11 5 5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKayak))
export { Memo as IconKayak }
