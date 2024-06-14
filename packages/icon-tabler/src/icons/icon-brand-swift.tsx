/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSwift = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.547 15.828C21.877 11.702 19.163 6.307 14.5 3c-.135-.096 2.39 6.704 1.308 9.124C13.655 10.67 11.052 8.63 8 6l-.5 2L4 7c4.36 4.748 7.213 7.695 8.56 8.841C7.902 17.93 1.91 14.863 2 15c1.016 1.545 6 6 11 6 2 0 3.788-.502 4.742-1.389.005-.005.432-.446 1.378-.17.504.148 1.463.667 2.88 1.559v-1.507c0-1.377-.515-2.67-1.453-3.665"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSwift))
export { Memo as IconBrandSwift }
