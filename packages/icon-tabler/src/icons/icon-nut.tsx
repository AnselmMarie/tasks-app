/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNut = (_props: any) => {
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
        <Path d="M19 6.84a2.007 2.007 0 0 1 1 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a1.995 1.995 0 0 1-1.94 0l-6-3.844A2.006 2.006 0 0 1 4 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.049 2.049 0 0 1 2 0l6 3.582z" />
        <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconNut))
export { Memo as IconNut }
