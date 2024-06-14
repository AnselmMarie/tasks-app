/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAffiliate = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275m-5.381-5.752 5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m13 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m0 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-13-3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAffiliate))
export { Memo as IconAffiliate }
