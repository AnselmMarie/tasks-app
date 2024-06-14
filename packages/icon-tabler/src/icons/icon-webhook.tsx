/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWebhook = (_props: any) => {
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
        <Path d="M4.876 13.61A4 4 0 1 0 11 17h6" />
        <Path d="M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8" />
        <Path d="M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWebhook))
export { Memo as IconWebhook }
