/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandLoom = (_props: any) => {
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
        <Path d="M17.464 6.518a6 6 0 1 0-3.023 7.965" />
        <Path d="M17.482 17.464a6 6 0 1 0-7.965-3.023" />
        <Path d="M6.54 17.482a6 6 0 1 0 3.024-7.965" />
        <Path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandLoom))
export { Memo as IconBrandLoom }
