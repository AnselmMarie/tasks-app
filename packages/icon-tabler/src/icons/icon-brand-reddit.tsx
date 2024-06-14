/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandReddit = (_props: any) => {
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
        <Path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zm0 0 1-5 6 1" />
        <Path d="M18 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Circle cx={9} cy={13} r={0.5} fill="currentColor" />
        <Circle cx={15} cy={13} r={0.5} fill="currentColor" />
        <Path d="M10 17c.667.333 1.333.5 2 .5s1.333-.167 2-.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandReddit))
export { Memo as IconBrandReddit }
