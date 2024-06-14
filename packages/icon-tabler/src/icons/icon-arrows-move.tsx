/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMove = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 9 3 3-3 3m-3-3h6M6 9l-3 3 3 3m-3-3h6m0 6 3 3 3-3m-3-3v6m3-15-3-3-3 3m3-3v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMove))
export { Memo as IconArrowsMove }