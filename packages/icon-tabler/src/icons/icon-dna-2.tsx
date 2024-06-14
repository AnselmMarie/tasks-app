/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDna_2 = (_props: any) => {
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
        <Path d="M17 3v1c-.01 3.352-1.68 6.023-5.008 8.014-3.328 1.99 3.336-2 .008-.014-3.328 1.99-5 4.662-5.008 8.014v1" />
        <Path d="M17 21.014v-1c-.01-3.352-1.68-6.023-5.008-8.014-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8m-8 8h8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDna_2))
export { Memo as IconDna_2 }
