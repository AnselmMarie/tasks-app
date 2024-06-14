/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandCoreos = (_props: any) => {
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
        <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
        <Path d="M12 3c-3.263 3.212-3 7.654-3 12 4.59.244 8.814-.282 12-3" />
        <Path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandCoreos))
export { Memo as IconBrandCoreos }
