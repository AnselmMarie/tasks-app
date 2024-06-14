/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCoinBitcoinFilled = (_props: any) => {
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
          d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M13 6a1 1 0 0 0-1 1h-1a1 1 0 0 0-2 0 1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167-.394 2-1.527 2-2.85l-.005-.175a3.063 3.063 0 0 0-.734-1.827c.46-.532.739-1.233.739-1.998 0-1.323-.833-2.456-2-2.85V7a1 1 0 0 0-1-1m.09 7c.492 0 .91.437.91 1s-.418 1-.91 1H11v-2zm0-4c.492 0 .91.437.91 1 0 .522-.36.937-.806.993L13.09 11H11V9z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCoinBitcoinFilled))
export { Memo as IconCoinBitcoinFilled }
