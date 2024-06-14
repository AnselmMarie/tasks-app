/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCapsuleFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="m12 2-.243.004A7.004 7.004 0 0 0 5 9v6a7 7 0 0 0 7 7l.243-.004A7.004 7.004 0 0 0 19 15V9a7 7 0 0 0-7-7"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCapsuleFilled))
export { Memo as IconCapsuleFilled }
