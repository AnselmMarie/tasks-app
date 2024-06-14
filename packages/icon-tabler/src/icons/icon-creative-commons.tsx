/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCreativeCommons = (_props: any) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116m6-3a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCreativeCommons))
export { Memo as IconCreativeCommons }
