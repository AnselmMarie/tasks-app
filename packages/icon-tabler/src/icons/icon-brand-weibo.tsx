/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandWeibo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14.127C19 17.2 15.498 20 11 20c-4.126 0-8-2.224-8-5.565 0-1.78.984-3.737 2.7-5.567 2.362-2.51 5.193-3.687 6.551-2.238.415.44.752 1.39.749 2.062 2-1.615 4.308.387 3.5 2.693 1.26.557 2.5.538 2.5 2.742M15 4h1a5 5 0 0 1 5 5v1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandWeibo))
export { Memo as IconBrandWeibo }
