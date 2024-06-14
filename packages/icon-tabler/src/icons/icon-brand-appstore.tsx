/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandAppstore = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m5 4 1.106-1.99m1.4-2.522L13 7m-6 7h5m2.9 0H17m-1 2-2.51-4.518m-1.487-2.677-1-1.805"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandAppstore))
export { Memo as IconBrandAppstore }
