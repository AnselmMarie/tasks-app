/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCoinYuanFilled = (_props: any) => {
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
          d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-1.445 3.828a1 1 0 0 0-1.387.277L12 10.696l-2.168-3.25a1 1 0 0 0-1.286-.337l-.1.059a1 1 0 0 0-.278 1.387L10.464 12H9a1 1 0 0 0-.993.883L8 13a1 1 0 0 0 1 1h2v3a1 1 0 0 0 .883.993L12 18l.117-.007A1 1 0 0 0 13 17v-3h2a1 1 0 0 0 .993-.883L16 13a1 1 0 0 0-1-1h-1.465l2.297-3.445a1 1 0 0 0-.184-1.317z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCoinYuanFilled))
export { Memo as IconCoinYuanFilled }
