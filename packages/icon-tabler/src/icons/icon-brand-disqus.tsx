/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDisqus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M11.847 21c-2.259 0-4.323-.667-5.919-2H2l1.708-3.266C3.163 14.56 2.949 13.288 2.95 12c0-4.97 3.84-9 8.898-9C16.9 3 21 7.03 21 12c0 4.972-4.098 9-9.153 9" />
        <Path d="M11.485 15H10V9h1.485C13.597 9 15 9.823 15 11.981v.035C15 14.196 13.597 15 11.485 15" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDisqus))
export { Memo as IconBrandDisqus }
