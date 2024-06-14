/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconReceiptEuro = (_props: any) => {
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
        <Path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
        <Path d="M15 7.8c-.523-.502-1.172-.8-1.875-.8C11.398 7 10 8.791 10 11s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M9 11h4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconReceiptEuro))
export { Memo as IconReceiptEuro }
