/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDog = (_props: any) => {
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
        <Path d="M11 5h2m6 7c-.667 5.333-2.333 8-5 8h-4c-2.667 0-4.333-2.667-5-8" />
        <Path d="M11 16c0 .667.333 1 1 1s1-.333 1-1zm1 2v2m-2-9v.01m4-.01v.01M5 4l6 .97-6.238 6.688a1.021 1.021 0 0 1-1.41.111.953.953 0 0 1-.327-.954zm14 0-6 .97 6.238 6.688c.358.408.989.458 1.41.111a.953.953 0 0 0 .327-.954z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDog))
export { Memo as IconDog }
