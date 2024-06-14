/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGoogleHome = (_props: any) => {
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
        <Path d="M19.072 21H4.928A1.928 1.928 0 0 1 3 19.072v-6.857c0-.512.203-1 .566-1.365l7.07-7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363.362.566.853.566 1.365v6.857A1.928 1.928 0 0 1 19.072 21" />
        <Path d="M7 13v4h10v-4l-5-5m2.8-2.8L3 17m4 0v4m10-4v4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGoogleHome))
export { Memo as IconBrandGoogleHome }
