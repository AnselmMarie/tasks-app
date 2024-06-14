/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLungsOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.583 6.608c-1.206 1.058-2.07 2.626-2.933 5.449-.42 1.37-.636 2.962-.648 4.775-.012 1.675 1.261 3.054 2.877 3.161l.203.007C7.693 20 9 18.665 9 17.02V9m6 2V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824.42 1.37.636 2.962.648 4.775v.187m-1.455 2.51c-.417.265-.9.43-1.419.464l-.202.007c-1.613 0-2.92-1.335-2.92-2.98V15M9 12a2.99 2.99 0 0 0 2.132-.89M12 4v4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLungsOff))
export { Memo as IconLungsOff }
