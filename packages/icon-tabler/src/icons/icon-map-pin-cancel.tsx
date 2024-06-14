/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapPinCancel = (_props: any) => {
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
        <Path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
        <Path d="M12.463 21.431a1.999 1.999 0 0 1-1.876-.531l-4.244-4.243a8 8 0 1 1 13.594-4.655M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMapPinCancel))
export { Memo as IconMapPinCancel }
