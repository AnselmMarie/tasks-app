/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarFilled = (_props: any) => {
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
          d="m8.243 7.34-6.38.925-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499-1.09 6.355-.013.11a1 1 0 0 0 1.464.944l5.706-3 5.693 3 .1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355 4.624-4.5.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926-2.852-5.78a1 1 0 0 0-1.794 0z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStarFilled))
export { Memo as IconStarFilled }
