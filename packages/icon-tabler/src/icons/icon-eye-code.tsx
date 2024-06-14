/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeCode = (_props: any) => {
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
        <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M11.11 17.958C7.901 17.651 5.2 15.665 3 12c2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6-.21.352-.427.688-.647 1.008M20 21l2-2-2-2m-3 0-2 2 2 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEyeCode))
export { Memo as IconEyeCode }
