/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHemispherePlus = (_props: any) => {
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
        <Path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9" />
        <Path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A8.978 8.978 0 0 0 21 9m-5 10h6m-3-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHemispherePlus))
export { Memo as IconHemispherePlus }
